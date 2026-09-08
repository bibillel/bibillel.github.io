import { Navigation, Hero, Projects, About, Contact } from './portfolio';
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="footer wrap">
        <a className="logo" href="#accueil" aria-label="BE. Retour à l’accueil">
          BE<span>.</span>
        </a>
        <p>Billel Ezzamari · Développeur web full-stack</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </>
  );
}
