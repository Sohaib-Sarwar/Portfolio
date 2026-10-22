import { motion } from 'framer-motion';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

const ctas = [
  personalInfo.resumeDownload && {
    label: 'Resume',
    href: personalInfo.resumeDownload,
    icon: <FileDownloadOutlinedIcon sx={{ fontSize: 18 }} />,
    ariaLabel: 'Download resume (PDF)',
  },
  { label: 'GitHub', href: personalInfo.github, icon: <GitHubIcon sx={{ fontSize: 18 }} />, external: true },
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: <LinkedInIcon sx={{ fontSize: 18 }} />, external: true },
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: <EmailOutlinedIcon sx={{ fontSize: 18 }} /> },
].filter(Boolean);

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Center opening animation overlay */}
      <motion.div
        className="hero__reveal-overlay hero__reveal-left"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
      />
      <motion.div
        className="hero__reveal-overlay hero__reveal-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
      />

      <div className="hero__content">
        {/* Giant name */}
        <div className="hero__name-wrapper">
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="sr-only">Muhammad </span>
            {personalInfo.firstName}
            <span className="sr-only"> Sarwar, {personalInfo.headline}</span>
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <span className="hero__tagline-dim">{personalInfo.tagline}</span>
          <span className="hero__tagline-italic">{personalInfo.taglineHighlight}</span>
        </motion.p>

        {/* Calls to action */}
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          {ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className="hero__cta"
              aria-label={cta.ariaLabel}
              {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {cta.icon}
              <span>{cta.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Bottom badges */}
        <div className="hero__bottom">
          <motion.div
            className="hero__badge hero__badge--left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <LocationOnOutlinedIcon sx={{ fontSize: 20, color: 'var(--accent)' }} />
            <div className="hero__badge-text">
              <span className="hero__badge-main">BASED IN ISLAMABAD,</span>
              <span className="hero__badge-sub">PAKISTAN</span>
            </div>
          </motion.div>

          <motion.div
            className="hero__badge hero__badge--right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <LayersOutlinedIcon sx={{ fontSize: 20, color: 'var(--accent-blue)' }} />
            <div className="hero__badge-text">
              <span className="hero__badge-main">POLYGLOT DEVELOPER,</span>
              <span className="hero__badge-sub">&amp; SOFTWARE ENGINEER</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
