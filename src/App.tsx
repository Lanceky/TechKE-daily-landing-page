import { useEffect, useState } from 'react'
import './App.css'

const playStoreUrl =
    'https://play.google.com/store/apps/details?id=com.techke.app'
const contactEmail = 'qlanlabs@gmail.com'

const spotlightArticles = [
    {
        title: 'Nairobi fintech pilots instant cross-border payouts',
        publisher: 'Nairobi Tech Review',
        author: 'Achieng O.',
        date: 'May 18, 2026',
    },
    {
        title: 'Mombasa climate startup scales solar cold-chain',
        publisher: 'East Africa Innovation',
        author: 'Kamau N.',
        date: 'May 16, 2026',
    },
    {
        title: 'Kisumu developers launch Swahili learning app',
        publisher: 'Silicon Savannah Brief',
        author: 'Editorial Desk',
        date: 'May 12, 2026',
    },
]

const communityHighlights = [
    {
        title: 'Builders map',
        detail: 'Follow founders, teams, and communities across Kenya.',
    },
    {
        title: 'Local momentum',
        detail: 'See what Nairobi, Mombasa, and Kisumu are building each week.',
    },
    {
        title: 'Community signals',
        detail: 'Track launches, meetups, and ecosystem updates in one feed.',
    },
]

const productHighlights = [
    {
        title: 'Smart discovery',
        detail: 'Personalized stories and alerts tailored to your interests.',
    },
    {
        title: 'Save and share',
        detail: 'Bookmark and share updates with your team in seconds.',
    },
    {
        title: 'Fast and lightweight',
        detail: 'Optimized for low data usage and smooth reading.',
    },
]

const editorialGuidelines = [
    'Attribution: Aggregated content includes the original publisher and a link to the source.',
    'Verification: Facts are checked against primary sources where possible.',
    `Corrections: We correct errors promptly; users can report inaccuracies at ${contactEmail}.`,
    'Independence: We disclose conflicts of interest and maintain editorial independence.',
    'Updates: Time-sensitive stories are updated with clear timestamps.',
]

const editors = [
    { role: 'Editor-in-Chief', name: 'Henry Ouma' },
    { role: 'News Editor', name: 'Henry Ouma' },
    { role: 'Technology Correspondent', name: 'Henry Ouma' },
    { role: 'Community Editor', name: 'Henry Ouma' },
    { role: 'Contributor', name: 'Henry Ouma' },
]

function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const stored = localStorage.getItem('theme')
        if (stored === 'light' || stored === 'dark') return stored
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const isDark = theme === 'dark'

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            ) : (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    )
}

function App() {
    return (
        <div className="page">
            <div className="topbar">
                <div className="brand">
                    Tech <span>KE</span>
                </div>
                <nav className="nav-links" aria-label="Primary">
                    <a href="#home">Home</a>
                    <a href="#spotlight">Spotlight</a>
                    <a href="#community">Community</a>
                    <a href="#product">Product</a>
                    <a href="#editorial">Editorial</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="topbar-actions">
                    <ThemeToggle />
                    <a
                        className="btn btn-primary btn-sm"
                        href={playStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Get on Play Store
                    </a>
                </div>
            </div>

            <header id="home" className="hero">
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
                <section id="spotlight" className="section spotlight">
                    <div className="section-header">
                        <div>
                            <span className="eyebrow">Spotlight</span>
                            <h2>Daily headlines with clear attribution.</h2>
                        </div>
                        <p>
                            Every preview includes publisher, author, and full publication
                            date.
                        </p>
                    </div>
                    <div className="spotlight-grid">
                        {spotlightArticles.map((article) => (
                            <article key={article.title} className="spotlight-card">
                                <span className="tag">Spotlight</span>
                                <h3>{article.title}</h3>
                                <div className="article-meta">
                                    <span>Publisher: {article.publisher}</span>
                                    <span>Author: {article.author}</span>
                                    <span>{article.date}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="community" className="section features">
                    <div className="section-header">
                        <div>
                            <span className="eyebrow">Community</span>
                            <h2>Connect to Kenya's tech ecosystem.</h2>
                        </div>
                        <p>Stay close to the builders shaping the Silicon Savannah.</p>
                    </div>
                    <div className="feature-grid">
                        {communityHighlights.map((item) => (
                            <article key={item.title} className="feature-tile">
                                <h3>{item.title}</h3>
                                <p>{item.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="product" className="section features">
                    <div className="section-header">
                        <div>
                            <span className="eyebrow">Product</span>
                            <h2>Everything you need, right in the app.</h2>
                        </div>
                        <p>Discover, save, and share updates in a few taps.</p>
                    </div>
                    <div className="feature-grid">
                        {productHighlights.map((item) => (
                            <article key={item.title} className="feature-tile">
                                <h3>{item.title}</h3>
                                <p>{item.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="editorial" className="section editorial">
                    <div className="section-header">
                        <div>
                            <span className="eyebrow">Editorial</span>
                            <h2>Editorial standards and transparency.</h2>
                        </div>
                        <p>How TechKE Daily maintains trust, accuracy, and independence.</p>
                    </div>
                    <div className="editorial-grid">
                        <article id="editorial-guidelines" className="editorial-card">
                            <h3>Editorial Guidelines</h3>
                            <ul className="guidelines-list">
                                {editorialGuidelines.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                        <article id="authors-editors" className="editorial-card">
                            <h3>Authors &amp; Editors</h3>
                            <ul className="editor-list">
                                {editors.map((editor) => (
                                    <li key={editor.role}>
                                        <span className="editor-role">{editor.role}</span>
                                        <span className="editor-name"> - {editor.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                        <article id="news-sources" className="editorial-card">
                            <h3>News Sources</h3>
                            <p>
                                TechKE Daily aggregates technology news from trusted publishers
                                and verified sources across Kenya and East Africa. Each article
                                includes publisher attribution and a link to the original
                                source when available.
                            </p>
                            <p className="disclosure">
                                TechKE Daily aggregates tech news from verified publishers and
                                links to original sources.
                            </p>
                        </article>
                    </div>
                </section>

                <section id="contact" className="section contact">
                    <div className="section-header">
                        <div>
                            <span className="eyebrow">Contact &amp; Editorial</span>
                            <h2>Contact &amp; Editorial</h2>
                        </div>
                        <p>Reach the TechKE Daily team and editorial desk.</p>
                    </div>
                    <div className="contact-card">
                        <dl className="contact-list">
                            <div className="contact-item">
                                <dt>Entity name</dt>
                                <dd>TechKE Daily (operated by QLAN Labs)</dd>
                            </div>
                            <div className="contact-item">
                                <dt>Contact email</dt>
                                <dd>
                                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                                </dd>
                            </div>
                            <div className="contact-item">
                                <dt>Location</dt>
                                <dd>Nairobi, Kenya</dd>
                            </div>
                            <div className="contact-item">
                                <dt>Editorial contact</dt>
                                <dd>
                                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                                </dd>
                            </div>
                            <div className="contact-item">
                                <dt>Support</dt>
                                <dd>
                                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                                </dd>
                            </div>
                        </dl>
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
                </div>
                <div className="footer-links">
                    <a href="#contact">Contact</a>
                    <a href="#editorial-guidelines">Editorial Guidelines</a>
                    <a href="/privacy">Privacy</a>
                    <a href="/terms">Terms</a>
                    <a href={`mailto:${contactEmail}`}>Support</a>
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
