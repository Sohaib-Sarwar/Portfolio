import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <a href="#home" className="footer__logo">SOHAIB</a>
            <p className="footer__tagline">Code you can trust.</p>
          </div>

          <nav className="footer__nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer__nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__social">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="GitHub">
              <GitHubIcon sx={{ fontSize: 17 }} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
              <LinkedInIcon sx={{ fontSize: 17 }} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="footer__social-icon" aria-label="Email">
              <EmailIcon sx={{ fontSize: 17 }} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} {personalInfo.name.toUpperCase()}
          </p>
          <p className="footer__built">
            DESIGNED & BUILT WITH PRECISION
          </p>
        </div>
      </div>
    </footer>
  );
}
