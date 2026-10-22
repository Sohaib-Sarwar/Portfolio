import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { personalInfo } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact__text-side">
            <div className="contact__title-row">
              <h2 className="contact__title">Let&apos;s create</h2>
            </div>
            <h2 className="contact__title contact__title--accent">
              something real.
            </h2>
          </div>

          <div className="contact__ring-side">
            <div className="contact__ring" />
          </div>
        </motion.div>

        {/* Email — formal format */}
        <motion.div
          className="contact__email-formal"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <EmailOutlinedIcon sx={{ fontSize: 20, color: 'var(--text-muted)' }} />
          <a href={`mailto:${personalInfo.email}`} className="contact__email-link">
            {personalInfo.email}
            <ArrowOutwardIcon sx={{ fontSize: 14, ml: 1 }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
