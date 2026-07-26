import fs from 'fs';
import path from 'path';
import https from 'https';

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const url =
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;600;700&display=swap';

function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            'User-Agent': USER_AGENT,
            ...options.headers,
          },
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            return fetch(res.headers.location, options).then(resolve).catch(reject);
          }
          let data = [];
          res.on('data', (chunk) => data.push(chunk));
          res.on('end', () => resolve(Buffer.concat(data)));
        }
      )
      .on('error', reject);
  });
}

async function main() {
  console.log('Fetching Google Fonts stylesheet...');
  const cssBuffer = await fetch(url);
  const cssText = cssBuffer.toString('utf8');
  console.log('CSS length:', cssText.length);

  // We want to extract font-face blocks
  const fontFaceRegex = /@font-face\s*\{([^}]+)\}/g;
  let match;

  const publicFontsDir = path.resolve('public', 'fonts');
  if (!fs.existsSync(publicFontsDir)) {
    fs.mkdirSync(publicFontsDir, { recursive: true });
  }

  let localCss = '';
  const fontCounts = {};

  while ((match = fontFaceRegex.exec(cssText)) !== null) {
    const block = match[1];

    // Parse properties
    const familyMatch = block.match(/font-family:\s*['"]?([^'";]+)['"]?/);
    const weightMatch = block.match(/font-weight:\s*([0-9]+)/);
    const styleMatch = block.match(/font-style:\s*([a-z]+)/);
    const urlMatch = block.match(/url\((https:[^)]+\.woff2)\)/);

    // For Fraunces, we also have opsz range
    const opszMatch = block.match(/font-stretch:\s*([^;]+)/);

    if (familyMatch && weightMatch && urlMatch) {
      const family = familyMatch[1];
      const weight = weightMatch[1];
      const style = styleMatch ? styleMatch[1] : 'normal';
      const remoteUrl = urlMatch[1];

      // Skip italics or unicode-range parts that we don't need if we want to be strict.
      // Actually, Google Fonts uses unicode-range. Let's download Latin-only or download all and map them.
      // Google CSS contains multiple blocks per font for different unicode ranges (latin, latin-ext, cyrillic, etc.).
      // To keep it clean, we can download the latin range or map the blocks.
      const isLatin =
        block.includes('unicode-range: U+0000-00FF') ||
        block.includes('unicode-range: U+0100') ||
        !block.includes('unicode-range');

      // Let's print out what range this block is for
      const rangeMatch = block.match(/\/\*\s*([a-z0-9-]+)\s*\*\//);
      const subset = rangeMatch ? rangeMatch[1] : 'latin';

      // We only care about 'latin' to keep payload small and avoid unnecessary requests!
      if (subset !== 'latin') {
        continue;
      }

      const key = `${family.replace(/\s+/g, '')}-${weight}-${style}`;
      fontCounts[key] = (fontCounts[key] || 0) + 1;
      const fileName = `${key}-${fontCounts[key]}.woff2`;
      const localFilePath = path.join(publicFontsDir, fileName);

      console.log(`Downloading ${key} (subset: ${subset}) -> public/fonts/${fileName}`);
      const fontData = await fetch(remoteUrl);
      fs.writeFileSync(localFilePath, fontData);

      // Construct @font-face declaration pointing to the local file
      let localBlock = `@font-face {\n`;
      localBlock += `  font-family: '${family}';\n`;
      localBlock += `  font-style: ${style};\n`;
      localBlock += `  font-weight: ${weight};\n`;
      localBlock += `  font-display: swap;\n`;
      if (family === 'Fraunces') {
        localBlock += `  font-stretch: 9% 144%;\n`; // opsz match
      }
      localBlock += `  src: local('${family}'), url('/fonts/${fileName}') format('woff2');\n`;

      // Copy unicode-range from original
      const unicodeRangeMatch = block.match(/unicode-range:\s*([^;]+);/);
      if (unicodeRangeMatch) {
        localBlock += `  unicode-range: ${unicodeRangeMatch[1]};\n`;
      }
      localBlock += `}\n\n`;

      localCss += localBlock;
    }
  }

  fs.writeFileSync(path.resolve('src', 'styles', 'fonts.css'), localCss);
  console.log('Created src/styles/fonts.css!');
}

main().catch((err) => {
  console.error('Error downloading fonts:', err);
});
