import React from 'react';
import { ContourArt } from '../ui/ContourArt';
import {
  footerLinks,
  socialLinks,
  companyDescription,
  footerHeader,
  creditText,
} from '../../content/footer';
import { ArrowUp, Mail, MapPin, Calendar } from 'lucide-react';

// Custom Lucide-style Brand Icons (since they are deprecated/removed in newer lucide-react versions)
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const socialIconMap: Record<string, React.ComponentType<any>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
};

export const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#');
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const section = document.getElementById(href.slice(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer className="relative border-t border-border bg-surface py-16 md:py-20 overflow-hidden">
      {/* Subtle ContourArt Watermark Background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02] overflow-hidden"
        aria-hidden="true"
      >
        <ContourArt />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10 space-y-12 md:space-y-16">
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Logo & Description Column (5/12 cols) */}
          <div className="md:col-span-5 space-y-5 text-left">
            <span className="font-display font-medium text-xl text-primary tracking-tight select-none">
              {footerHeader.logoText}
              <span className="text-gold font-sans font-normal ml-0.5">
                {footerHeader.logoSymbol}
              </span>
            </span>
            <p className="font-sans text-xs md:text-sm text-secondary leading-relaxed max-w-sm">
              {companyDescription}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon] || GithubIcon;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface border border-border/60 hover:border-accent/40 hover:-translate-y-0.5 rounded-lg text-secondary hover:text-accent shadow-sm focus-ring outline-none transition-all duration-200"
                    aria-label={`Visit our ${social.platform}`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Column (3/12 cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-mono text-[9px] font-semibold text-secondary uppercase tracking-widest select-none">
              Navigation
            </h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      className="font-sans text-xs text-secondary hover:text-primary hover:underline underline-offset-4 decoration-accent/60 transition-colors focus-ring outline-none py-0.5 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Details Column (4/12 cols) */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="font-mono text-[9px] font-semibold text-secondary uppercase tracking-widest select-none">
              Contact & Studio
            </h4>
            <div className="space-y-3.5 text-xs text-secondary">
              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-secondary/70" aria-hidden="true" />
                <a
                  href={`mailto:${footerHeader.email}`}
                  className="font-mono hover:text-primary focus-ring outline-none"
                >
                  {footerHeader.email}
                </a>
              </div>
              {/* Location */}
              {footerHeader.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-secondary/70" aria-hidden="true" />
                  <span className="font-sans">{footerHeader.location}</span>
                </div>
              )}
              {/* Availability */}
              {footerHeader.availability && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-secondary/70" aria-hidden="true" />
                  <span className="font-sans italic">{footerHeader.availability}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/60" aria-hidden="true" />

        {/* Bottom Metadata Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-secondary">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>{footerHeader.copyright}</span>
            <span className="hidden sm:inline text-border/60">|</span>
            <a
              href="https://digitalheroesco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors focus-ring outline-none"
            >
              {creditText}
            </a>
          </div>

          {/* Closing Statement */}
          <span className="hidden lg:inline italic select-none">
            {footerHeader.closingStatement}
          </span>

          {/* Back to Top */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 py-1.5 px-3 bg-surface border border-border/80 hover:border-accent/40 rounded-md text-secondary hover:text-accent shadow-sm focus-ring outline-none transition-all duration-200"
            aria-label="Scroll back to top of the page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
