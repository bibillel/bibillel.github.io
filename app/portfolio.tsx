'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { ContactForm } from './contact-form';
const github = 'https://github.com/bibillel';
export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navigation wrap">
      <a
        className="logo"
        href="#accueil"
        aria-label="BE. Billel Ezzamari, accueil"
      >
        BE<span>.</span>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation-links"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Fermer −' : 'Menu +'}
      </button>
      <nav
        id="navigation-links"
        className={open ? 'nav-links is-open' : 'nav-links'}
        aria-label="Navigation principale"
      >
        {[
          ['projets', 'Projets'],
          ['a-propos', 'À propos'],
          ['competences', 'Compétences'],
          ['contact', 'Contact ↗'],
        ].map(([id, label]) => (
          <a
            key={id}
            href={'#' + id}
            onClick={() => setOpen(false)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setOpen(false);
                document
                  .querySelector<HTMLButtonElement>('.menu-toggle')
                  ?.focus();
              }
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
export function Hero() {
  return (
    <section id="accueil" className="hero wrap">
      <div className="eyebrow hero-label">
        <span>Billel Ezzamari / Développeur web junior</span>
        <span>Front-end · Back-end</span>
      </div>
      <div className="speed-lines" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <h1>
        <span>DÉVELOPPEUR</span>
        <span className="accent">FULL-STACK.</span>
      </h1>
      <p className="hero-copy">
        Un problème, plusieurs chemins.
        <br />
        J’aime explorer les solutions et donner forme aux idées, une ligne de
        code à la fois.
      </p>
      <div className="hero-actions">
        <a className="primary-link" href="#projets">
          Explorer mes projets <span aria-hidden="true">↘</span>
        </a>
        <a className="text-link" href="#a-propos">
          Découvrir mon parcours ↗
        </a>
      </div>
      <div className="hero-bottom eyebrow">
        <span>React / Sass / Node.js / MongoDB</span>
        <a href="#projets">Défiler pour découvrir ↓</a>
      </div>
    </section>
  );
}
const projects = [
  {
    id: 'kasa',
    name: 'Kasa',
    objective:
      'Créer une interface responsive de location de logements et permettre de naviguer du catalogue aux fiches détaillées.',
    skills:
      'Découper une interface en composants React réutilisables, transmettre des données entre composants, organiser les imports et structurer les styles avec Sass.',
    label: 'Front-end',
    stack: 'React · Sass',
    image: '/projects/kasa.png',
    caption: 'Kasa — accueil et catalogue des logements.',
    logos: ['react', 'sass'],
    result:
      'Une interface organisée en composants réutilisables : catalogue de logements, fiches détaillées et navigation entre les pages.',
    title: 'Une interface de location, composant par composant.',
    context:
      'Projet de formation : réaliser l’interface d’un site de location de logements avec React.',
    work: 'Organisation de l’interface en composants React et répartition des styles dans plusieurs fichiers Sass.',
    challenge:
      'Passer d’un fichier CSS unique à des styles répartis, comprendre les liens entre les composants et gérer leurs imports.',
    learning:
      'Les cours, les explications de mon mentor et les essais successifs m’ont aidé à comprendre cette organisation et à corriger mes erreurs.',
    improvement:
      'Poursuivre la documentation des composants et enrichir les tests des parcours utilisateurs.',
    url: github + '/projet-5',
  },
  {
    id: 'grimoire',
    name: 'Mon Vieux Grimoire',
    objective:
      'Connecter le front-end fourni à une API permettant de gérer des livres et leurs notes, avec des accès protégés.',
    skills:
      'Construire des routes API REST, contrôler les données et les autorisations, gérer les erreurs et hacher les mots de passe avec bcrypt.',
    label: 'Back-end',
    stack: 'Node.js · MongoDB',
    image: '/projects/grimoire.png',
    caption:
      'Écran de connexion du front-end fourni. Mon travail porte sur l’API.',
    logos: ['nodedotjs', 'mongodb'],
    result:
      'Une API REST avec gestion des livres et des notes, contrôle du propriétaire avant modification ou suppression, mots de passe hachés et images converties en WebP.',
    title: 'Des livres, des notes et des accès maîtrisés.',
    context:
      'Projet de formation : développer le back-end d’un site de notation de livres, à connecter à un front-end React fourni.',
    work: 'API de gestion des livres et des notes, authentification, contrôle des autorisations et traitement des images. Le dépôt documente JWT, bcrypt et Sharp.',
    challenge:
      'Gérer les autorisations, contrôler les données reçues, traiter les différents cas d’erreur et comprendre le hachage des mots de passe.',
    learning:
      'Je me suis appuyé sur les cours OpenClassrooms pour comprendre ces mécanismes et les mettre en pratique.',
    improvement:
      'Renforcer les tests des cas d’erreur et documenter les réponses de l’API.',
    url:
      github +
      '/openclassroom-projet-D-veloppez-le-back-end-d-un-site-de-notation-de-livres',
  },
  {
    id: 'menu-maker',
    name: 'Menu Maker',
    objective:
      'Préparer un développement réalisable à partir du besoin de Qwenta, en proposant des choix techniques et un ordre de réalisation des tâches.',
    skills:
      'Traduire des spécifications en tâches, identifier les dépendances, estimer la complexité et organiser une veille technique.',
    label: 'Conception',
    stack: 'Spécifications · Kanban · Veille',
    image: '/projects/menu-maker.png',
    caption: 'Extrait du Kanban réalisé pour préparer le développement.',
    logos: [],
    result:
      'Un dossier de préparation avec spécifications techniques, 28 tâches estimées et une veille. L’application n’a pas été codée dans ce projet.',
    title: 'Transformer un besoin en plan de développement.',
    context:
      'Qwenta souhaite permettre aux restaurateurs de créer, personnaliser et exporter leurs menus. Ce projet de formation porte sur la préparation du développement.',
    work: 'Rédaction des spécifications, proposition d’architecture, Kanban de 28 tâches techniques et veille Feedly. Next.js, TypeScript, PostgreSQL et Prisma sont des choix proposés pour le futur développement.',
    challenge:
      'Traduire les spécifications en tâches concrètes, identifier leurs dépendances et estimer leur complexité pour construire une planification cohérente.',
    learning:
      'Mon mentor m’a expliqué le travail en méthode agile. L’IA m’a aidé à comprendre les échelles d’estimation de la complexité des tâches.',
    improvement:
      'Confirmer les accès aux API partenaires, puis confronter les choix techniques à un prototype.',
    url: null,
  },
];
export function Projects() {
  return (
    <section id="projets" className="projects">
      <div className="wrap">
        <Reveal className="section-heading">
          <h2>Du code aux projets.</h2>
          <span className="eyebrow">01 — Sélection</span>
        </Reveal>
        <div className="project-grid">
          {projects.map((p) => (
            <Reveal className={'project project--' + p.id} key={p.id}>
              <figure className="project-visual">
                <a
                  href={p.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={
                    'Agrandir la capture de ' + p.name + ' (nouvel onglet)'
                  }
                >
                  <Image
                    src={p.image}
                    alt={p.caption}
                    width={1265}
                    height={713}
                    loading="lazy"
                    unoptimized
                  />
                </a>
                <figcaption>{p.caption}</figcaption>
              </figure>
              <div className="project-meta eyebrow">
                {p.logos.map((logo) => (
                  <Image
                    key={logo}
                    className="stack-logo"
                    src={'/logos/' + logo + '.svg'}
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                  />
                ))}
                {p.label} / {p.stack}
              </div>
              <h3>{p.name}</h3>
              <p>{p.title}</p>
              <details>
                <summary>
                  Explorer le projet <span aria-hidden="true">+</span>
                </summary>
                <div className="project-details">
                  {[
                    ['Le contexte', p.context],
                    ['Les objectifs', p.objective],
                    ['Mon travail', p.work],
                    ['Les compétences développées', p.skills],
                    ['Le résultat', p.result],
                    ['La difficulté', p.challenge],
                    ['Ce que j’ai appris', p.learning],
                    ['Pour aller plus loin', p.improvement],
                  ].map(([title, text]) => (
                    <div key={title}>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  ))}
                  {p.url && (
                    <a
                      className="repo-link"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le code sur GitHub ↗
                    </a>
                  )}
                  {p.id === 'menu-maker' && (
                    <a
                      className="repo-link"
                      href="/projects/menu-maker-kanban.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Consulter le Kanban (PDF, 103 Ko) ↗
                    </a>
                  )}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section id="a-propos" className="about wrap">
      <Reveal className="section-heading">
        <h2>
          Changer de voie.
          <br />
          Construire la suite.
        </h2>
        <span className="eyebrow">02 — Mon parcours</span>
      </Reveal>
      <Reveal className="about-layout">
        <div className="about-text">
          <p>
            Avant le développement web, j’ai suivi un BTS Commerce
            international. La formation m’a plu et j’y ai obtenu de bons
            résultats, mais ses débouchés ne correspondaient pas à mes
            aspirations.
          </p>
          <p>
            Une occasion de reconversion et les conseils d’un ami m’ont aidé à
            me lancer. Aujourd’hui, ce qui me plaît, c’est de chercher
            différentes solutions à un même problème et de voir le résultat
            évoluer au fil des modifications.
          </p>
          <p>
            Je souhaite travailler en full-stack pour utiliser régulièrement mes
            compétences, consolider mes acquis et développer de bonnes pratiques
            professionnelles.
          </p>
        </div>
        <ol className="journey">
          <li>
            <span className="eyebrow">Le point de départ</span>
            <h3>Commerce international</h3>
            <p>
              Un BTS, puis l’envie de trouver une voie qui me correspond
              davantage.
            </p>
          </li>
          <li>
            <span className="eyebrow">Le changement</span>
            <h3>Développement web</h3>
            <p>
              Une reconversion avec OpenClassrooms, des projets et
              l’accompagnement de mon mentor.
            </p>
          </li>
          <li>
            <span className="eyebrow">La suite</span>
            <h3>Un rôle full-stack</h3>
            <p>
              Contribuer côté interface comme côté serveur et continuer à
              apprendre.
            </p>
          </li>
        </ol>
      </Reveal>
      <Reveal className="skills">
        <div id="competences" className="section-heading">
          <h2>Mes outils de travail.</h2>
          <span className="eyebrow">03 — Compétences</span>
        </div>
        <div className="skills-grid">
          <div>
            <h3>Interface</h3>
            <p>
              HTML · CSS · Sass
              <br />
              JavaScript · React
            </p>
          </div>
          <div>
            <h3>Serveur</h3>
            <p>
              Node.js · MongoDB
              <br />
              API REST · Authentification
            </p>
          </div>
          <div>
            <h3>Méthode</h3>
            <p>
              Git · GitHub · Kanban
              <br />
              Spécifications · Veille
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">04 — Échangeons</span>
          <h2>
            Et si on écrivait
            <br />
            <span>la suite ensemble ?</span>
          </h2>
          <p>
            Je recherche un poste de développeur full-stack junior à Lyon,
            Grenoble ou dans leurs environs, plus largement en
            Auvergne-Rhône-Alpes. Je souhaite contribuer avec React, JavaScript
            et Node.js, et reste ouvert au télétravail.
          </p>
          <p>
            <a className="text-link" href="mailto:billel.ezzamari@gmail.com">
              billel.ezzamari@gmail.com
            </a>
          </p>
          <a
            className="primary-link"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            Retrouvez-moi sur GitHub <span aria-hidden="true">↗</span>
          </a>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
