import './App.css'

const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.techke.app'

const features = [
  {
    title: 'Kenya-first discovery',
    detail:
      'Find builders, startups, and communities across Nairobi, Mombasa, and Kisumu.',
  },
  {
    title: 'Personalized interests',
    detail:
      'Follow topics like AI, fintech, agritech, and policy with your own mix.',
  },
  {
    title: 'Lightweight experience',
    detail: 'Fast, low-data, and reliable for the way Kenya moves.',
  },
]

function App() {
  return (
    <div className="page">
      <div className="topbar">
        <div className="brand">
          Tech <span>KE</span>
        </div>
        <a
          className="btn btn-primary btn-sm"
          href={playStoreUrl}
          target="_blank"
          rel="noreferrer"
        >
          Get on Play Store
        </a>
      </div>

      <header className="hero">
        <div className="hero-content">
          <span className="eyebrow">Tech KE App</span>
          <h1>Kenya's tech community, in your pocket.</h1>
          <p className="lead">
            Discover people, products, and progress across the Silicon Savannah.
            One app, built for Kenya's builders.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download on Google Play
            </a>
            <span className="helper-text">Android only for now</span>
          </div>
          <div className="trust-row">
            <span className="trust-text">Trusted by 50K+ community members</span>
            <div className="trust-logos">
              <span className="logo-pill">Safaricom</span>
              <span className="logo-pill">iHub</span>
              <span className="logo-pill">Nailab</span>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-stack">
            <div className="mock phone">
              <div className="phone-top">
                <span>Tech KE</span>
                <span className="status-dot"></span>
              </div>
              <div className="phone-card primary">
                <span className="tag">Spotlight</span>
                <h3>Nairobi product teams to watch</h3>
                <p>People, products, and momentum in one place.</p>
              </div>
              <div className="phone-card">
                <span className="tag alt">Community</span>
                <p>Follow makers across Nairobi and the coast.</p>
              </div>
            </div>
            <div className="mock card card-one">
              <span className="tag">Spotlight</span>
              <h4>Silicon Savannah innovators</h4>
              <p>Profiles, launches, and updates.</p>
            </div>
            <div className="mock card card-two">
              <span className="tag alt">Product</span>
              <h4>Swahili-first UX wins</h4>
              <p>Local design inspiration</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="features" className="section features">
          <div className="section-header">
            <div>
              <span className="eyebrow">Why Tech KE</span>
              <h2>Built for Kenya's builders and teams.</h2>
            </div>
            <p>
              A clean, focused experience to stay connected with the ecosystem.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((item) => (
              <article key={item.title} className="feature-tile">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cta" className="section cta-band">
          <div>
            <span className="eyebrow">Download Tech KE</span>
            <h2>Get the Tech KE app on Google Play.</h2>
            <p>Join thousands of Kenyans building and shipping every week.</p>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-primary"
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download on Google Play
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div>
          <div className="brand">
            Tech <span>KE</span>
          </div>
          <p>Kenya's app for the tech community and the Silicon Savannah.</p>
          <div className="social-links">
            <a href={playStoreUrl} aria-label="Tech KE on X">
              <span className="icon-circle" aria-hidden="true">
                X
              </span>
            </a>
            <a href={playStoreUrl} aria-label="Tech KE on LinkedIn">
              <span className="icon-circle" aria-hidden="true">
                in
              </span>
            </a>
            <a href={playStoreUrl} aria-label="Tech KE on YouTube">
              <span className="icon-circle" aria-hidden="true">
                yt
              </span>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <a href="mailto:qlanlabs@gmail.com">Contact</a>
          <a
            href="https://lanceky.github.io/techke-privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
          <a
            href="https://lanceky.github.io/techke-privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
          <a href="mailto:qlanlabs@gmail.com">Support</a>
        </div>
      </footer>

      <div className="mobile-cta" aria-label="Quick actions">
        <a
          className="btn btn-primary"
          href={playStoreUrl}
          target="_blank"
          rel="noreferrer"
        >
          Get on Play Store
        </a>
      </div>
    </div>
  )
}

export default App
