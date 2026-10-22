import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import { projects, workGroups, personalInfo } from '../data/portfolio';
import { techIcons, invertedIcons } from '../data/techIcons';
import RichText from './RichText';
import './Projects.css';

const NDA_NOTE = 'Under NDA, built at 99 Technologies.';

// Global running number across groups (01, 02, ...)
const projectNumber = new Map(
  workGroups
    .flatMap((g) => projects.filter((p) => p.category === g.id))
    .map((p, i) => [p.id, String(i + 1).padStart(2, '0')])
);

function TechTag({ name }) {
  const src = techIcons[name];
  return (
    <li className="work-tag">
      {src && (
        <img
          src={src}
          alt=""
          width="14"
          height="14"
          loading="lazy"
          decoding="async"
          className={`work-tag__icon${invertedIcons.has(name) ? ' work-tag__icon--invert' : ''}`}
        />
      )}
      {name}
    </li>
  );
}

function ProjectLink({ link, title }) {
  const isRepo = link.type === 'repo';
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="work-link"
      aria-label={`${title}: ${link.label} (opens in a new tab)`}
    >
      {isRepo ? <GitHubIcon sx={{ fontSize: 16 }} /> : <ArrowOutwardIcon sx={{ fontSize: 16 }} />}
      <span>{link.label}</span>
    </a>
  );
}

function ProjectCard({ project }) {
  const { title, subtitle, status, nda, flagship, client, description, metrics, highlights, building, tech, links } = project;
  const isLive = status?.startsWith('Live');

  return (
    <motion.article
      className={`work-card work-card--${project.category}${flagship ? ' work-card--flagship' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Lift lives here, not in CSS: framer's inline transform would override it
      whileHover={{ y: -3 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <header className="work-card__top">
        <span className="work-card__index">{projectNumber.get(project.id)}</span>
        <div className="work-card__badges">
          {flagship && <span className="work-badge work-badge--accent">Flagship</span>}
          {nda && (
            <span className="work-badge">
              <LockOutlinedIcon sx={{ fontSize: 12 }} />
              NDA
            </span>
          )}
          {status && (
            <span className="work-badge">
              {isLive && <span className="work-badge__dot" aria-hidden="true" />}
              {status}
            </span>
          )}
        </div>
      </header>

      <div className="work-card__heading">
        <h4 className="work-card__title">{title}</h4>
        <p className="work-card__subtitle">{subtitle}</p>
        {client && (
          <p className="work-card__client">
            Client:{' '}
            {client.url ? (
              <a href={client.url} target="_blank" rel="noopener noreferrer">{client.name}</a>
            ) : (
              client.name
            )}
          </p>
        )}
      </div>

      <p className="work-card__desc">{description}</p>

      {metrics && (
        <dl className="work-card__metrics">
          {metrics.map((m) => (
            <div key={m.label} className="work-metric">
              <dt className="work-metric__label">{m.label}</dt>
              <dd className="work-metric__value">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <ul className="work-card__highlights">
        {highlights.map((h) => (
          <li key={h}><RichText text={h} /></li>
        ))}
      </ul>

      {building && (
        <div className="work-card__building">
          <span className="work-card__building-label">
            <EngineeringOutlinedIcon sx={{ fontSize: 14 }} />
            Currently building
          </span>
          <p>{building}</p>
        </div>
      )}

      <ul className="work-card__tech" aria-label={`${title} tech stack`}>
        {tech.map((t) => <TechTag key={t} name={t} />)}
      </ul>

      {(nda || links.length > 0) && (
        <footer className="work-card__footer">
          {nda && (
            <span className="work-card__nda-note">
              <LockOutlinedIcon sx={{ fontSize: 13 }} />
              {NDA_NOTE}
            </span>
          )}
          {links.length > 0 && (
            <div className="work-card__links">
              {links.map((link) => <ProjectLink key={link.url} link={link} title={title} />)}
            </div>
          )}
        </footer>
      )}
    </motion.article>
  );
}

export default function Projects() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      {/* Giant title section with center reveal */}
      <div className="projects__hero" ref={heroRef}>
        <motion.div
          className="projects__reveal-left"
          initial={{ x: 0 }}
          animate={heroInView ? { x: '-100%' } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        />
        <motion.div
          className="projects__reveal-right"
          initial={{ x: 0 }}
          animate={heroInView ? { x: '100%' } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        />
        <motion.div
          className="projects__hero-inner"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 id="projects-title" className="projects__mega-title">MY WORK</h2>
          <div className="projects__hero-sub">
            <span className="projects__hero-label">SHIPPED FOR CLIENTS &middot; BUILT IN THE OPEN</span>
            <span className="projects__hero-italic">selected work.</span>
          </div>
        </motion.div>
      </div>

      <div className="container">
        {workGroups.map((group, gi) => {
          const items = projects.filter((p) => p.category === group.id);
          if (items.length === 0) return null;
          return (
            <div key={group.id} className={`work-group work-group--${group.id}`}>
              <div className="work-group__head">
                <span className="work-group__label">
                  {String(gi + 1).padStart(2, '0')} &mdash; {group.label}
                </span>
                <h3 className="work-group__title">{group.title}</h3>
                <p className="work-group__desc">{group.description}</p>
                <span className="work-group__count">
                  {items.length} {items.length === 1 ? 'project' : 'projects'}
                </span>
              </div>
              <div className={`work-grid work-grid--${group.id}`}>
                {items.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          );
        })}

        <div className="projects__more">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="projects__more-link">
            <GitHubIcon sx={{ fontSize: 16 }} />
            More on GitHub
          </a>
          <a href={personalInfo.githubOrg} target="_blank" rel="noopener noreferrer" className="projects__more-link">
            <GitHubIcon sx={{ fontSize: 16 }} />
            Fintech projects org
          </a>
        </div>
      </div>
    </section>
  );
}
