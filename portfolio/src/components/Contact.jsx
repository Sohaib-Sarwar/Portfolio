import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { personalInfo } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="contact" ref={ref} aria-labelledby="contact-title">
      <div className="container">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact__text-side">
            <h2 id="contact-title" className="contact__title">
              Let&apos;s create
              <span className="contact__title--accent">something real.</span>
            </h2>
            <p className="contact__availability">
              <LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
              {personalInfo.location}. {personalInfo.availability}
            </p>
          </div>

          <div className="contact__ring-side" aria-hidden="true">
            <div className="contact__ring" />
          </div>
        </motion.div>

        <motion.div
          className="contact__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href={`mailto:${personalInfo.email}`} className="contact__email-formal">
            <EmailOutlinedIcon sx={{ fontSize: 20 }} className="contact__email-icon" />
            <span className="contact__email-link">{personalInfo.email}</span>
            <ArrowOutwardIcon sx={{ fontSize: 14 }} className="contact__email-arrow" />
          </a>
          <div className="contact__social">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <LinkedInIcon sx={{ fontSize: 18 }} />
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <GitHubIcon sx={{ fontSize: 18 }} />
              GitHub
            </a>
            <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <DescriptionOutlinedIcon sx={{ fontSize: 18 }} />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
