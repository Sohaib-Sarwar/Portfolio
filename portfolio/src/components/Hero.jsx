import { motion } from 'framer-motion';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Center opening animation overlay */}
      <motion.div
        className="hero__reveal-overlay hero__reveal-left"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
      />
      <motion.div
        className="hero__reveal-overlay hero__reveal-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
      />

      <div className="hero__content">
        {/* Giant name */}
        <div className="hero__name-wrapper">
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            SOHAIB
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.div
          className="hero__tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <span className="hero__tagline-dim">
            I ENGINEER AND BUILD SYSTEMS THAT
          </span>
          <span className="hero__tagline-italic">deliver real impact.</span>
        </motion.div>

        {/* Bottom badges */}
        <div className="hero__bottom">
          <motion.div
            className="hero__badge hero__badge--left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <LocationOnOutlinedIcon
              sx={{ fontSize: 20, color: 'var(--accent-green)' }}
            />
            <div className="hero__badge-text">
              <span className="hero__badge-main">BASED IN ISLAMABAD,</span>
              <span className="hero__badge-sub">PAKISTAN</span>
            </div>
          </motion.div>

          <motion.div
            className="hero__badge hero__badge--right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <LayersOutlinedIcon
              sx={{ fontSize: 20, color: 'var(--accent-blue)' }}
            />
            <div className="hero__badge-text">
              <span className="hero__badge-main">FULL STACK DEV,</span>
              <span className="hero__badge-sub">& SOFTWARE ENGINEER</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
