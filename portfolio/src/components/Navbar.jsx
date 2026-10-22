import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { personalInfo } from '../data/portfolio';
import profilePic from '../assets/profile.webp';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the drawer is open
  useEffect(() => {
    if (!mobileOpen) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  // Close the drawer if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px)');
    const onChange = (e) => e.matches && setMobileOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    }
    setMobileOpen(false);
  }, []);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="navbar__inner" aria-label="Primary">
          {/* Left: Logo + descriptor */}
          <div className="navbar__left">
            <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')} aria-label="Back to top">
              <img src={profilePic} alt="" className="navbar__logo-img" width="32" height="32" decoding="async" />
            </a>
            <div className="navbar__descriptor">
              <span className="navbar__dot" />
              <div className="navbar__descriptor-text">
                <span className="navbar__descriptor-top">SOFTWARE ENGINEER</span>
                <span className="navbar__descriptor-bottom">POLYGLOT DEVELOPER</span>
              </div>
            </div>
          </div>

          {/* Center: Nav links in pill */}
          <div className="navbar__center">
            <div className="navbar__pill">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="navbar__right">
            <a href="#contact" className="navbar__cta" onClick={(e) => handleNavClick(e, '#contact')}>
              Get in Touch
            </a>
          </div>

          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mobile-menu__links" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mobile-menu__social">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <GitHubIcon sx={{ fontSize: 20 }} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Send an email">
                <EmailOutlinedIcon sx={{ fontSize: 20 }} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
