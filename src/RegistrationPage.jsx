import { useEffect, useRef, useState } from "react";
import { collageImages, googleSheetsEndpoint } from "./data";

const eventGroups = {
  Dance: ["Razzmatazz", "Street Dance", "Let's Tangle", "Mudra", "Pump It Up"],
  Music: ["Battle of Bands", "Gully War", "Malhaar", "Aaroh"],
  Drama: ["Rangshala", "Hunkaar", "Mukhauta", "Paddhati"],
  Photography: ["Film Making Competition", "PhotoBooth", "Image Hunt", "Pixels", "Perspective", "Kalakriti"],
  Fashion: ["Vogue", "Mr and Ms Viva"],
  Art: ["Tattoo Tales", "Splash", "Eclectic", "Hue-niverse", "Contrasto"],
  "Speaking Arts": ["Duologue", "Family Feud", "Potpourri", "Dare to Spell", "Spotlight", "Afreen", "Open Discussion"],
  Quizzing: ["Bamboozled", "Movie Auction"],
  "Other Events": ["Prom Night", "Silent Disco", "Jamming Night", "Stage Spectrum"]
};
const allEventNames = Object.values(eventGroups).flat();

function Collage() {
  const collageRef = useRef(null);
  useEffect(() => {
    const collage = collageRef.current;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { alpha: true });
    const loaded = [];
    let viewportWidth = 0;
    let viewportHeight = 0;
    const drawTile = (image, index) => { const tileWidth = Math.max(110, Math.min(190, viewportWidth * .13)); const tileHeight = tileWidth / 1.25; const x = ((index * 19) % 100) / 100 * viewportWidth; const y = ((index * 31) % 100) / 100 * viewportHeight; context.save(); context.translate(x + tileWidth / 2, y + tileHeight / 2); context.rotate(((index % 5) - 2) * Math.PI / 180); context.globalAlpha = window.innerWidth <= 800 ? .65 : 1; context.filter = "sepia(.45) saturate(.8) contrast(1.1)"; context.drawImage(image, -tileWidth / 2, -tileHeight / 2, tileWidth, tileHeight); context.restore(); };
    const resize = () => { const scale = Math.min(window.devicePixelRatio || 1, 1.5); viewportWidth = window.innerWidth; viewportHeight = window.innerHeight; canvas.width = Math.floor(viewportWidth * scale); canvas.height = Math.floor(viewportHeight * scale); canvas.style.width = `${viewportWidth}px`; canvas.style.height = `${viewportHeight}px`; context.setTransform(scale, 0, 0, scale, 0, 0); context.clearRect(0, 0, viewportWidth, viewportHeight); loaded.forEach(({ image, index }) => drawTile(image, index)); };
    const loadBatch = start => { collageImages.slice(start, start + 6).forEach((filename, offset) => { const image = new Image(); image.decoding = "async"; image.fetchPriority = "low"; image.onload = () => { loaded.push({ image, index: start + offset }); drawTile(image, start + offset); }; image.src = `${import.meta.env.BASE_URL}${filename}`; }); if (start + 6 < collageImages.length) { const schedule = window.requestIdleCallback || (callback => window.setTimeout(callback, 180)); schedule(() => loadBatch(start + 6)); } };
    collage.replaceChildren(canvas); resize(); loadBatch(0); window.addEventListener("resize", resize, { passive: true });
    return () => window.removeEventListener("resize", resize);
  }, []);
  return <div className="registration-collage" ref={collageRef} aria-hidden="true" />;
}

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState([]);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);
  useEffect(() => { document.body.className = "registration-page"; return () => { document.body.className = ""; }; }, []);
  const toggleAll = () => setSelected(selected.length === allEventNames.length ? [] : allEventNames);
  const submit = async event => { event.preventDefault(); if (!selected.length) { setStatus("SELECT AT LEAST ONE EVENT TO CONTINUE."); return; } const formData = Object.fromEntries(new FormData(formRef.current)); const payload = { ...formData, selectedEvents: selected.join(", "), submittedAt: new Date().toISOString() }; setSubmitting(true); setStatus(""); try { if (googleSheetsEndpoint) await fetch(googleSheetsEndpoint, { method: "POST", mode: "no-cors", body: JSON.stringify(payload) }); else localStorage.setItem("vivacityRegistration", JSON.stringify(payload)); setSuccess(true); window.scrollTo({ top: 0, behavior: "smooth" }); } catch { setSubmitting(false); setStatus("TRANSMISSION FAILED. PLEASE TRY AGAIN."); } };
  return <><div className="grain" aria-hidden="true" /><Collage /><header className="nav registration-nav"><a className="brand" href="index.html" aria-label="Back to Vivacity home"><span>V</span>VIVACITY<sup>27</sup></a><a className="back-link" href="index.html">← BACK TO CITY</a></header><main className="registration-shell"><div className="registration-intro"><p className="eyebrow cyan">CAMPUS AMBASSADOR NETWORK / 2027</p><h1>PUT YOUR<br /><em>CAMPUS</em> ON THE MAP.</h1><p className="registration-lede">Register your institution with Vivacity '27 and signal the events your team wants to enter. One submission keeps your campus details and event preferences together.</p><div className="registration-aside"><span>01</span><p>ONE CAMPUS<br /><strong>ALL THE SIGNALS.</strong></p></div></div>{success ? <section className="registration-success"><span className="success-mark">✓</span><p className="eyebrow cyan">TRANSMISSION RECEIVED</p><h2>YOU ARE<br /><em>CONNECTED.</em></h2><p>Your campus registration has been recorded for Vivacity '27. Keep this page open for the next transmission.</p><a className="back-link" href="index.html">← RETURN TO CITY</a></section> : <form className="registration-form" ref={formRef} onSubmit={submit}><div className="form-heading"><span>REGISTRATION / <b>{String(step).padStart(3, "0")}</b></span><small>FIELDS MARKED * ARE REQUIRED</small></div><div className="form-progress" aria-label="Registration progress"><span className={step === 1 ? "active" : "complete"}>01</span><i /><span className={step === 2 ? "active" : ""}>02</span></div>{step === 1 ? <section className="form-step active"><p className="step-kicker">STEP 01 / CAMPUS IDENTITY</p><legend>01 / YOUR CAMPUS</legend><div className="field-grid"><label>Full name *<input name="fullName" type="text" autoComplete="name" required placeholder="Your name" /></label><label>Role *<select name="role" required defaultValue=""><option value="">Choose role</option><option value="Campus Ambassador">Campus Ambassador / Team Leader</option><option value="Faculty Coordinator">Faculty Coordinator</option></select></label><label>College / institution *<input name="institution" type="text" autoComplete="organization" required placeholder="Institution name" /></label><label>City *<input name="city" type="text" autoComplete="address-level2" required placeholder="City" /></label><label>Team size *<input name="teamSize" type="number" min="1" max="1000" required placeholder="Number of participants" /></label><label>Phone number *<input name="phone" type="tel" autoComplete="tel" required pattern="[0-9 +()-]{10,}" placeholder="10-digit number" /></label><label>Email address *<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div><div className="step-actions"><span>PAGE 1 OF 2</span><button className="step-button" type="button" onClick={() => { if (formRef.current.reportValidity()) { setStep(2); window.scrollTo({ top: 0, behavior: "smooth" }); } }}>CONTINUE TO EVENTS <i>→</i></button></div></section> : <section className="form-step active"><p className="step-kicker">STEP 02 / EVENT SIGNALS</p><legend>02 / EVENT TRANSMISSIONS</legend><div className="event-controls"><p>Select every event your campus wants to register for.</p><button type="button" className="select-all" onClick={toggleAll}>{selected.length === allEventNames.length ? "CLEAR ALL EVENTS" : "SELECT ALL EVENTS"} <span>+</span></button></div><div className="event-groups">{Object.entries(eventGroups).map(([category, events]) => <section className="event-group" key={category}><h3>{category.toUpperCase()}</h3><div className="event-options">{events.map(name => <label className="event-option" key={name}><input type="checkbox" name="event" value={name} checked={selected.includes(name)} onChange={() => setSelected(current => current.includes(name) ? current.filter(item => item !== name) : [...current, name])} />{name}</label>)}</div></section>)}</div><p className="selected-count" aria-live="polite"><strong>{selected.length}</strong> events selected</p><label className="consent"><input type="checkbox" name="consent" required /><span>I confirm that these details are correct and agree to receive official Vivacity '27 updates.</span></label><div className="step-actions"><button className="back-step" type="button" onClick={() => setStep(1)}>← BACK</button><span>PAGE 2 OF 2</span><button className="step-button" type="submit" disabled={submitting}>{submitting ? "TRANSMITTING..." : "TRANSMIT REGISTRATION ↗"}</button></div></section>}<input type="hidden" name="selectedEvents" value={selected.join(", ")} readOnly /><p className="form-status" role="status">{status}</p></form>}</main></>;
}
