import { useEffect, useState } from "react";
import { allEvents, districts } from "./data";

const artists = [
  ["https://m.media-amazon.com/images/M/MV5BYWRmMTYxZWMtNjIzMC00OTIzLWI4YjAtZDRmMzkxN2JjZGFlXkEyXkFqcGc%40._V1_.jpg", "Javed", "Ali"],
  ["https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/08/21/Pictures/_40818626-e371-11ea-b244-d12791e95102.jpg", "Raftaar", ""],
  ["https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak%3D/v3/t/assets/574248_v9_aa.jpg", "Mohit", "Chauhan"],
  ["https://i.scdn.co/image/ab6761610000e5eb1dcbb331f2318db2dd2c6bcf", "Amit", "Trivedi"],
  ["https://images.moneycontrol.com/static-mcnews/2025/01/20250116165150_jubin-nautyal-singer.jpg?height=900&impolicy=website&width=1600", "Jubin", "Nautiyal"],
  ["https://media.assettype.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F08%2F17%2Ffile7f8zs10535w17ckm1ma-972561-1629188173.jpg?ar=40%3A21&auto=format%2Ccompress&mode=crop&ogImage=true&w=1200", "Asees", "Kaur"],
  ["https://www.hindustantimes.com/ht-img/img/2023/12/29/original/darshan_Raval_1703837969900.jpg", "Darshan", "Raval"],
  ["https://www.hindustantimes.com/ht-img/img/2023/12/26/optimize/Lost_Stories_Hindustan_Times_Samarth_Goyal__1703585349253_1703585372732.jpg", "Lost", "Stories"],
  ["https://rollingstoneindia.com/wp-content/uploads/2022/04/The-Local-Train1-LR-e1650349473267.jpg", "The Local", "Train"]
];

function Loader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    const timer = window.setInterval(() => setProgress(value => Math.min(value + Math.ceil(Math.random() * 14), 100)), 100);
    const exit = window.setTimeout(() => setLeaving(true), 2400);
    return () => { window.clearInterval(timer); window.clearTimeout(exit); };
  }, []);
  return <div className={`loader${leaving ? " leaving" : ""}`} aria-label="Loading Vivacity">
    <div className="loader-mark">V.</div><p className="eyebrow">VIVACITY '27 / LNMIIT JAIPUR</p><h1>INITIALIZING<br /><em>CITY</em></h1>
    <div className="loader-line"><span /></div><div className="loader-status"><span>LOADING: MUSIC · DANCE · ART · PEOPLE</span><span>{String(progress).padStart(2, "0")}%</span></div>
    <button className={`loader-enter${progress === 100 ? " ready" : ""}`} onClick={() => setLeaving(true)}>ENTER CITY <i>↗</i></button>
  </div>;
}

function Navigation({ menuOpen, setMenuOpen }) {
  return <header className="nav" id="top">
    <a className="brand" href="#top" aria-label="Vivacity home"><span>V</span>VIVACITY<sup>27</sup></a>
    <nav className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
      <a href="#about">About</a><a href="#districts">Events</a><a href="#nights">Pronites</a><a href="#archive">Archive</a>
    </nav>
    <a className="nav-cta" href="registration.html">REGISTER <i>↗</i></a>
    <button className={`menu-button${menuOpen ? " is-open" : ""}`} aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}><span /><span /></button>
  </header>;
}

function EventWeb() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const positions = [[12, 22], [30, 9], [50, 8], [70, 9], [88, 22], [88, 72], [70, 91], [50, 93], [30, 91], [12, 72]];
  const district = districts.find(item => item.name === selectedDistrict);
  const events = district?.events.map(name => allEvents.find(item => item.name === name && item.category === district.name)).filter(Boolean) || [];
  return <>
    <div className="event-web" aria-label="Interactive Vivacity event web">
      <svg className="web-lines" viewBox="0 0 1000 570" preserveAspectRatio="none" aria-hidden="true"><path d="M500 285 L120 125 M500 285 L300 50 M500 285 L500 45 M500 285 L700 50 M500 285 L880 125 M500 285 L880 410 M500 285 L700 520 M500 285 L500 530 M500 285 L300 520 M500 285 L120 410" /><path d="M120 125 L300 50 L500 45 L700 50 L880 125 L880 410 L700 520 L500 530 L300 520 L120 410 Z" /></svg>
      <div className="web-noise" aria-hidden="true" />
      <div className="web-nodes">{districts.map((item, index) => <button key={item.name} className={`web-node ${item.color}${selectedDistrict === item.name ? " selected" : ""}`} data-category={item.name} style={{ "--node-x": `${positions[index][0]}%`, "--node-y": `${positions[index][1]}%` }} onClick={() => setSelectedDistrict(item.name)}><span className="node-pulse" /><small>0{index + 1} / {item.count} EVENTS</small><strong>{item.name}</strong></button>)}</div>
      <div className="web-core"><span>V.</span><strong>{district ? district.name.toUpperCase() : <>VIVACITY<br />'27</>}</strong><small>{district ? `${district.count} EVENTS UNLOCKED` : "SELECT A DISTRICT"}</small><small className="web-prize">PRIZE POOL · {district ? "TO BE ANNOUNCED" : "TBA"}</small></div>
      <div className="orbit-events">{events.map((event, index) => { const angle = -Math.PI / 2 + (index * Math.PI * 2) / events.length; return <button key={event.name} className={`orbit-event ${district.color}`} style={{ "--event-x": `${50 + Math.cos(angle) * (events.length <= 4 ? 35 : 39)}%`, "--event-y": `${50 + Math.sin(angle) * (events.length <= 4 ? 36 : 39)}%`, "--event-delay": `${index * 115}ms` }} onClick={() => setSelectedEvent(event)}><span>✦</span>{event.name}</button>; })}</div>
      <p className="web-instruction">{district ? "EVENT SIGNALS UNLOCKED" : "CLICK A NODE TO RELEASE ITS EVENTS"} <i>{district ? "✦" : "↗"}</i></p>
    </div>
    {selectedEvent && <div className="event-modal open" aria-hidden="false" onClick={event => { if (event.target.classList.contains("modal-backdrop") || event.target.closest(".close-modal") || event.target.closest(".close-button")) setSelectedEvent(null); }}><div className="modal-backdrop" /><article><button className="close-modal" aria-label="Close">×</button><p className="eyebrow">{selectedEvent.category} DISTRICT</p><h2>{selectedEvent.name}</h2><img className="modal-image" src={selectedEvent.image} alt={selectedEvent.name} /><p className="modal-section-label">EVENT BRIEF</p><p>{selectedEvent.description}</p><div className="modal-line" /><p className="modal-tba">VIVACITY '27 FORMAT, RULES AND REGISTRATION<br />ARE BEING TRANSMITTED SOON.</p><button className="outline-button close-button">BACK TO DISTRICT <i>←</i></button></article></div>}
  </>;
}

function Districts() {
  return <section className="districts section" id="districts"><div className="district-heading"><div className="section-index">03 <span>/ THE DISTRICTS</span></div><p className="eyebrow magenta">CHOOSE YOUR SIDE OF THE CITY</p><h2>50+ WAYS<br />TO <em>MAKE NOISE.</em></h2><p>Every discipline gets its own district. Every district has a different pulse.</p></div><div className="district-list" aria-label="Event districts">{districts.map((district, index) => <a href="#events" className={`district ${district.color}`} data-category={district.name} key={district.name}><span className="district-no">0{index + 1}</span><div><h3>{district.name}</h3><p>{district.tag}</p></div><span className="district-count">{district.count} EVENTS</span><i>↗</i></a>)}</div><a className="text-link all-events" href="#events">SEE ALL TRANSMISSIONS <i>→</i></a></section>;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.className = "";
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("in-view")), { threshold: 0.14 });
    document.querySelectorAll(".section, .district, .event-card").forEach(element => observer.observe(element));
    const onMove = event => { document.querySelector(".cursor-dot")?.style.setProperty("transform", `translate(${event.clientX}px,${event.clientY}px)`); document.querySelector(".cursor-ring")?.style.setProperty("transform", `translate(${event.clientX}px,${event.clientY}px)`); };
    if (window.matchMedia("(pointer:fine)").matches) window.addEventListener("mousemove", onMove);
    return () => { observer.disconnect(); window.removeEventListener("mousemove", onMove); };
  }, []);
  return <><div className="grain" aria-hidden="true" /><div className="cursor-dot" aria-hidden="true" /><div className="cursor-ring" aria-hidden="true" /><Loader /><Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main>
    <section className="hero" aria-labelledby="hero-title"><div className="city-image" /><div className="hero-wash" /><div className="scanlines" /><div className="heritage-skyline" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div><div className="city-label label-left"><span /> SECTOR 27 / JAIPUR</div><div className="city-label label-right">CITY ONLINE <b>●</b></div><div className="hero-content"><p className="eyebrow hero-eyebrow">THE ANNUAL CULTURAL FESTIVAL OF LNMIIT</p><h1 id="hero-title">VIVA<span>—</span><br />CITY<sup>27</sup></h1><div className="hero-bottom"><p>THE CITY OF<br /><strong>CREATIVITY</strong></p><a href="#about" className="circle-link" aria-label="Enter Vivacity"><span>ENTER<br />VIVACITY</span><i>↘</i></a></div></div><div className="hero-rail"><span>01</span><div /><span>SCROLL TO ENTER</span></div></section>
    <section className="intro section" id="about"><div className="section-index">01 <span>/ THE SIGNAL</span></div><div className="intro-copy"><p className="eyebrow cyan">A CITY MADE OF PEOPLE</p><h2>THE CITY<br />BEHIND <em>THE NOISE.</em></h2><p className="lead">Three days. Hundreds of institutions. Thousands of voices. One campus transformed by music, movement, art, and the kind of ideas that only show up when everyone arrives at once.</p><a className="text-link" href="#network">FIND THE FREQUENCY <i>→</i></a></div><div className="intro-art" aria-hidden="true"><div className="orb orb-one" /><div className="orb orb-two" /><div className="orb-ring" /><p>VIVACITY<br />JAIPUR</p></div></section>
    <section className="numbers section" id="network"><div className="network-lines" aria-hidden="true" /><div className="section-index">02 <span>/ THE NETWORK</span></div><p className="eyebrow">SIGNAL RECEIVED FROM EVERYWHERE</p><h2>THE CITY HAS<br /><em>450+ CONNECTIONS.</em></h2><div className="network-center"><span className="pulse" /><b>LNMIIT</b><small>JAIPUR</small></div><div className="stat stat-a"><strong>450+</strong><span>INSTITUTIONS</span></div><div className="stat stat-b"><strong>10,000+</strong><span>FOOTFALL</span></div><div className="stat stat-c"><strong>5,000+</strong><span>PARTICIPANTS</span></div><p className="network-caption">A festival at LNMIIT.<br />A network far beyond it.</p></section>
    <Districts />
    <section className="events-section section" id="events"><div className="section-index">04 <span>/ THE EVENT WEB</span></div><div className="web-heading"><p className="eyebrow cyan">CHOOSE A FLAGSHIP SIGNAL</p><h2>THE WEB OF<br /><em>VIVACITY '27.</em></h2><p>Tap into a district. Its events will break free into the city grid.</p></div><EventWeb /></section>
    <section className="nights section" id="nights"><div className="night-lights" aria-hidden="true"><i /><i /><i /><i /><i /></div><div className="section-index">05 <span>/ AFTER DARK</span></div><div className="night-copy"><p className="eyebrow magenta">03 PRONITES / ONE CITY WIDE AWAKE</p><h2>THE NIGHT<br />BELONGS TO<br /><em>THE STAGE.</em></h2><p className="lead">When the sun drops, the whole city turns toward one light. The next headliner is still being loaded.</p><button className="outline-button">GET ANNOUNCED <i>↗</i></button></div><div className="stage-screen"><div className="screen-glow" /><span>VIVACITY '27</span><p>HEADLINER<br />LOADING<span className="dots">...</span></p><small>ARTIST TRANSMISSION // TBA</small></div><div className="speaker speaker-left" /><div className="speaker speaker-right" /><div className="artist-archive" aria-label="Past Vivacity artists"><div className="artist-archive-heading"><p className="eyebrow">PAST PRONITE ARCHIVE</p><span>THE NAMES THAT LIT UP THE CITY <i>↓</i></span></div><div className="artist-rail">{[...artists, ...artists].map(([image, first, last], index) => <article className="artist-card" key={`${first}-${index}`} aria-hidden={index >= artists.length}><img src={image} alt={`${first} ${last}`} loading="lazy" /><div><small>PAST HEADLINERS</small><h3>{first}<br />{last}</h3></div></article>)}</div></div></section>
    <section className="experience section"><div className="section-index">06 <span>/ STREET LEVEL</span></div><p className="eyebrow cyan">MORE THAN A LINE-UP</p><h2>BEYOND<br /><em>THE EVENTS.</em></h2><div className="experience-panels"><article className="xp-panel xp-one"><div className="panel-number">01</div><h3>AFTER<br />HOURS</h3><p>Pronites, sudden jams, and a campus with nowhere else to be.</p></article><article className="xp-panel xp-two"><div className="panel-number">02</div><h3>THE<br />STREETS</h3><p>Food, installations, new faces, and moments between the main acts.</p></article><article className="xp-panel xp-three"><div className="panel-number">03</div><h3>THE<br />MEMORY</h3><p>Some nights don't need a replay. They just stay switched on.</p></article></div></section>
    <section className="archive section" id="archive"><div className="archive-top"><div className="section-index">07 <span>/ THE ARCHIVE</span></div><p className="eyebrow">PAST / PRESENT / NEXT</p></div><h2>SOME NIGHTS<br />DON'T NEED <em>A REPLAY.</em></h2><div className="gallery-grid"><figure className="gallery-tall"><div className="gallery-photo p1" /><figcaption>01 — AFTERGLOW</figcaption></figure><figure><div className="gallery-photo p2" /><figcaption>02 — CITY IN MOTION</figcaption></figure><figure><div className="gallery-photo p3" /><figcaption>03 — ALL TOGETHER</figcaption></figure><figure className="gallery-wide"><div className="gallery-photo p4" /><figcaption>04 — LIGHTS OUTSIDE, LIGHTS INSIDE</figcaption></figure></div><button className="outline-button archive-button">OPEN THE ARCHIVE <i>↗</i></button></section>
    <section className="transmission section"><div className="section-index">08 <span>/ LIVE FEED</span></div><div className="transmission-title"><p className="eyebrow magenta">THE CITY IS TALKING</p><h2>TRANSMISSION<br /><em>FEED.</em></h2></div><div className="feed"><article><time>/// 001</time><p>VIVACITY '27 IS<br />NOW CONNECTING.</p><span>JUST IN</span></article><article><time>/// 002</time><p>EVENT DETAILS<br />DROPPING SOON.</p><span>UPCOMING</span></article><article><time>/// 003</time><p>DATES ARE BEING<br />TRANSMITTED.</p><span>TBA</span></article></div></section>
    <section className="join section" id="join"><p className="eyebrow cyan">YOUR CITY. YOUR SIGNAL.</p><h2>STEP INTO<br /><em>VIVACITY.</em></h2><p>Registrations, artist drops and more will arrive here first.</p><div className="contact-grid" aria-label="Vivacity contacts"><a className="contact-card" href="tel:7849961549"><span>01 / CONTACT</span><strong>Pallav Surana</strong><b>7849961549</b></a><a className="contact-card" href="tel:8824607151"><span>02 / CONTACT</span><strong>Mihir Singh Kumawat</strong><b>8824607151</b></a><a className="contact-card" href="tel:8649865958"><span>03 / CONTACT</span><strong>Lamia Khan</strong><b>8649865958</b></a><a className="contact-card" href="tel:8982002631"><span>04 / CONTACT</span><strong>Paloma Jain</strong><b>8982002631</b></a></div><a href="registration.html" className="join-button">REGISTER AS CAMPUS AMBASSADOR <span>↗</span></a></section>
  </main><footer><a className="brand footer-brand" href="#top"><span>V</span>VIVACITY<sup>27</sup></a><div className="footer-grid"><p>THE ANNUAL CULTURAL FESTIVAL<br />OF LNMIIT, JAIPUR</p><div><a href="#districts">EVENTS</a><a href="#nights">PRONITES</a><a href="#archive">ARCHIVE</a></div><div><a href="#about">ABOUT</a><a href="#join">CONTACT</a><a href="#top">TOP ↑</a></div></div><div className="footer-bottom"><span>© 2027 VIVACITY · LNMIIT JAIPUR</span><span>ALL SYSTEMS READY <i>●</i></span></div></footer></>;
}

export default HomePage;
