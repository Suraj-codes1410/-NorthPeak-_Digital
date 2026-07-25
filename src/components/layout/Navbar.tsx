import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';
import { navLinks } from '../../content/nav';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { DURATIONS, EASINGS } from '../../lib/motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Extract section IDs from navigation content schema for Scroll Spy
  const sectionIds = React.useMemo(() => {
    return navLinks.map((link) => link.href.replace('#', ''));
  }, []);

  const activeSection = useScrollSpy(sectionIds);

  // Track window scroll coordinates to apply background styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap keyboard focus inside the mobile overlay dialog on open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock vertical scrolling on mobile when navigation overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('#')) {
      const section = document.getElementById(href.slice(1));
      if (section) {
        // Delay offset scroll slightly if mobile menu is closing to prevent layout lag
        const delay = isOpen ? 150 : 0;
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }, delay);
      }
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const delay = isOpen ? 150 : 0;
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#contact');
      }, delay);
    }
  };

  return (
    <header
      className={cn(
        'z-50 transition-all duration-300 ease-in-out',
        isOpen
          ? 'fixed inset-0 w-full h-screen bg-[#F8F7F4] flex flex-col justify-between p-6 md:p-12 overflow-y-auto'
          : [
              'sticky top-0 left-0 w-full',
              isScrolled
                ? 'bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm py-4'
                : 'bg-transparent border-b border-transparent py-6',
            ]
      )}
      onClick={
        isOpen
          ? (e) => {
              if (e.target === e.currentTarget) {
                setIsOpen(false);
                hamburgerRef.current?.focus();
              }
            }
          : undefined
      }
    >
      {!isOpen ? (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
            }}
            className="font-display font-medium text-xl md:text-2xl text-primary tracking-tight select-none focus-ring rounded-md"
            aria-label="NorthPeak homepage"
          >
            NorthPeak<span className="text-gold font-sans font-normal ml-0.5" aria-hidden="true">△</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    'group relative text-xs font-mono font-medium uppercase tracking-widest py-2 transition-colors duration-200 outline-none focus:text-accent',
                    isActive ? 'text-accent' : 'text-secondary hover:text-accent'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              onClick={handleCtaClick}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center justify-center p-2 text-primary hover:text-accent transition-colors duration-200 focus-ring rounded-lg"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: DURATIONS.normal, ease: EASINGS.standard }}
          className="w-full h-full flex flex-col justify-between max-w-7xl mx-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
              hamburgerRef.current?.focus();
            }
          }}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between w-full">
            <span className="font-display font-medium text-xl text-primary tracking-tight select-none">
              NorthPeak<span className="text-gold font-sans font-normal ml-0.5">△</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                hamburgerRef.current?.focus();
              }}
              className="flex items-center justify-center p-2 text-primary hover:text-accent transition-colors duration-200 focus-ring rounded-lg"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Navigation Links */}
          <nav
            className="flex flex-col items-center justify-center space-y-6 md:space-y-8 my-auto"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    'text-2xl md:text-3xl font-display font-medium tracking-tight py-2 transition-colors duration-200 outline-none focus:text-accent',
                    isActive ? 'text-accent' : 'text-primary hover:text-accent'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Footer CTA Row */}
          <div className="w-full flex flex-col items-center gap-4">
            <Button
              variant="primary"
              onClick={handleCtaClick}
              className="w-full max-w-sm py-4"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start a Project
            </Button>
            <span className="text-[10px] font-mono tracking-widest text-secondary uppercase">
              Warm Editorial Engineering
            </span>
          </div>
        </motion.div>
      )}
    </header>
  );
};
export default Navbar;
