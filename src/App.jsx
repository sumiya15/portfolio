import React, { useEffect, useRef, useState } from 'react';
import ProjectGallery from './ProjectGallery.jsx';

const views = [
  {
    id: 'recruiter',
    title: 'Recruiter',
    description: 'A quick look at my strongest work',
    portrait: 'portrait-recruiter',
    initials: 'S',
    eyebrow: 'THE HIGHLIGHTS',
    heading: 'A focused introduction',
    intro:
      'I’m Shaik Sumiya, a final-year B.Tech CSE (AI) student at Saveetha School of Engineering, graduating in 2027. My strongest language is C++, followed by Java.',
  },
  {
    id: 'developer',
    title: 'Developer',
    description: 'Explore how I build',
    portrait: 'portrait-developer',
    initials: '</>',
    eyebrow: 'THE BUILD LOG',
    heading: 'What I work with',
    intro:
      'I’m a final-year B.Tech CSE (AI) student at Saveetha School of Engineering. My strongest language is C++, followed by Java.',
  },
  {
    id: 'about',
    title: 'About Me',
    description: 'Get to know me',
    portrait: 'portrait-about',
    initials: '✳',
    eyebrow: 'THE PERSON',
    heading: 'Hello, I’m Sumiya.',
    intro:
      'I’m Shaik Sumiya, a final-year B.Tech CSE (AI) student at Saveetha School of Engineering, graduating in 2027. My strongest language is C++, followed by Java.',
  },
];

function Intro({ onEnter }) {
  return (
    <main className="intro-screen">
      <header className="intro-masthead">
        <span className="intro-masthead__name">SHAIK SUMIYA <i aria-hidden="true" /></span>
        <span className="intro-masthead__detail">CSE (AI) <b>·</b> CLASS OF 2027</span>
      </header>
      <div className="intro-orbit intro-orbit--one" aria-hidden="true" />
      <div className="intro-orbit intro-orbit--two" aria-hidden="true" />
      <div className="intro-content">
        <p className="eyebrow intro-kicker">COMPUTER SCIENCE <span>／</span> ARTIFICIAL INTELLIGENCE</p>
        <h1 className="intro-title">SUMIYA</h1>
        <p className="intro-subtitle">A portfolio in progress.</p>
        <div className="intro-actions">
          <button className="button button--primary" onClick={onEnter}>
            Enter Portfolio <span aria-hidden="true">↗</span>
          </button>
          <button className="button button--quiet" onClick={onEnter}>
            Skip Intro
          </button>
        </div>
      </div>
      <div className="intro-ticker" aria-hidden="true">
        <div className="intro-ticker__track">
          <span>AI IN PRACTICE <b>✳</b> C++ <b>✳</b> JAVA <b>✳</b> COMPUTER SCIENCE <b>✳</b></span>
          <span>AI IN PRACTICE <b>✳</b> C++ <b>✳</b> JAVA <b>✳</b> COMPUTER SCIENCE <b>✳</b></span>
        </div>
      </div>
      <p className="intro-index">PORTFOLIO <span>／</span> 2027</p>
    </main>
  );
}

function ResumeLink() {
  return (
    <a className="profile-action" href="/assets/resume.pdf" target="_blank" rel="noreferrer">
      Resume (PDF) <span aria-hidden="true">↗</span>
    </a>
  );
}

function ViewPicker({ onChoose, headingRef }) {
  return (
    <main className="picker-screen">
      <header className="picker-header">
        <div className="brand-mark" aria-label="Shaik Sumiya">
          <span className="brand-mark__dot" aria-hidden="true" />
          SHAIK SUMIYA
        </div>
        <p className="picker-caption">SELECT A VIEW <span>／</span> 2027</p>
      </header>
      <section className="picker-content" aria-labelledby="picker-heading">
        <p className="eyebrow">THREE WAYS TO EXPLORE</p>
        <h1 id="picker-heading" ref={headingRef} tabIndex="-1">Choose your view</h1>
        <p className="picker-description">Pick the path that best fits your visit.</p>
        <div className="avatar-grid">
          {views.map((view, index) => (
            <button
              className="avatar-card"
              key={view.id}
              onClick={() => onChoose(view.id)}
              aria-label={`${view.title}: ${view.description}`}
            >
              <span className="avatar-art" aria-hidden="true">
                <span className={`avatar-portrait ${view.portrait}`}>
                  <span className="portrait-glow" />
                  <span className="portrait-initials">{view.initials}</span>
                  <span className="portrait-orbit portrait-orbit--a" />
                  <span className="portrait-orbit portrait-orbit--b" />
                </span>
                <span className="avatar-number">0{index + 1}</span>
              </span>
              <span className="avatar-meta">
                <span className="avatar-title">{view.title}</span>
                <span className="avatar-description">{view.description}</span>
                <span className="avatar-arrow" aria-hidden="true">↗</span>
              </span>
            </button>
          ))}
        </div>
      </section>
      <footer className="picker-footer">
        <span>SHAIK SUMIYA</span>
        <span>B.TECH CSE (AI) · 2027</span>
      </footer>
    </main>
  );
}

function Destination({ view, onSwitch, headingRef }) {
  const isRecruiter = view.id === 'recruiter';
  const isDeveloper = view.id === 'developer';

  return (
    <main className={`destination destination--${view.id}`}>
      <header className="destination-header">
        <div className="brand-mark">
          <span className="brand-mark__dot" aria-hidden="true" />
          SUMIYA
        </div>
        <button className="switch-button" onClick={onSwitch}>
          <span aria-hidden="true">↶</span> Switch View
        </button>
      </header>

      <section className="destination-content" aria-labelledby="destination-heading">
        <div className="destination-copy">
          <p className="eyebrow">{view.eyebrow}</p>
          <h1 id="destination-heading" ref={headingRef} tabIndex="-1">{view.heading}</h1>
          <p className="destination-intro">{view.intro}</p>

          {isRecruiter && (
            <nav className="profile-actions" aria-label="Recruiter links">
              <a className="profile-action profile-action--primary" href="#featured-project">
                Explore AeroOps AI <span aria-hidden="true">↓</span>
              </a>
              <a className="profile-action" href="https://github.com/sumiya15" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a className="profile-action" href="mailto:sumiyashaikat15@gmail.com">
                Contact <span aria-hidden="true">↗</span>
              </a>
              <ResumeLink />
            </nav>
          )}

          {!isRecruiter && !isDeveloper && (
            <>
              <section className="education-card">
                <span className="eyebrow">EDUCATION</span>
                <h2>B.Tech · Computer Science &amp; Engineering (AI)</h2>
                <p>Saveetha School of Engineering</p>
                <span className="education-year">CLASS OF 2027</span>
              </section>
              <section className="contact-card" aria-labelledby="contact-heading">
                <span className="eyebrow">CONTACT</span>
                <h2 id="contact-heading">Find me online</h2>
                <div className="profile-actions">
                  <a className="profile-action" href="https://github.com/sumiya15" target="_blank" rel="noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                  <a className="profile-action" href="https://www.linkedin.com/in/shaiksumiya" target="_blank" rel="noreferrer">
                    LinkedIn <span aria-hidden="true">↗</span>
                  </a>
                  <a className="profile-action" href="mailto:sumiyashaikat15@gmail.com">
                    Email <span aria-hidden="true">↗</span>
                  </a>
                  <ResumeLink />
                </div>
              </section>
            </>
          )}
        </div>
        <aside className="destination-side" aria-hidden="true">
          <div className={`side-portrait ${view.portrait}`}>
            <span className="side-portrait__ring side-portrait__ring--outer" />
            <span className="side-portrait__ring side-portrait__ring--inner" />
            <span className="side-portrait__initial">{view.initials}</span>
          </div>
          <span className="side-caption">SHAIK SUMIYA <span>·</span> 2027</span>
        </aside>
      </section>
      {(isRecruiter || isDeveloper) && <ProjectGallery mode={view.id} />}
      <footer className="destination-footer">
        <span>PORTFOLIO / {view.title.toUpperCase()}</span>
        <span>SCROLL LESS, EXPLORE MORE</span>
      </footer>
    </main>
  );
}

function App() {
  const [screen, setScreen] = useState('intro');
  const [selectedView, setSelectedView] = useState(null);
  const screenHeadingRef = useRef(null);

  useEffect(() => {
    if (screen !== 'intro') {
      screenHeadingRef.current?.focus();
    }
  }, [screen]);

  function chooseView(viewId) {
    setSelectedView(views.find((view) => view.id === viewId));
    setScreen('destination');
  }

  function switchView() {
    setSelectedView(null);
    setScreen('picker');
  }

  if (screen === 'intro') {
    return <Intro onEnter={() => setScreen('picker')} />;
  }

  if (screen === 'picker') {
    return <ViewPicker onChoose={chooseView} headingRef={screenHeadingRef} />;
  }

  return (
    <Destination
      view={selectedView}
      onSwitch={switchView}
      headingRef={screenHeadingRef}
    />
  );
}

export default App;
