const districts = [
  { name: "Dance", count: 6, tag: "Where the city moves.", color: "cyan", events: ["Razzmatazz", "Street Dance", "Let's Tangle", "Mudra", "Pump It Up", "Taal Tarang"] },
  { name: "Music", count: 5, tag: "Turn the volume into a landmark.", color: "pink", events: ["Battle of Bands", "Gully War", "Malhaar", "Bandish", "Aaroh"] },
  { name: "Drama", count: 4, tag: "Every shadow has a story.", color: "yellow", events: ["Rangshala", "Hunkaar", "Mukhauta", "Paddhati"] },
  { name: "Photography", count: 6, tag: "Frame the flash before it fades.", color: "violet", events: ["FMC", "Photoboth", "Image Hunt", "Pixels", "Perspective", "Kalakriti"] },
  { name: "Fashion", count: 2, tag: "Make the street your runway.", color: "orange", events: ["Vogue", "Mr and Ms Viva"] },
  { name: "Art", count: 5, tag: "Make the city impossible to ignore.", color: "blue", events: ["Tattoo Tales", "Splash", "Eclectic", "Hue-niverse", "Contrasto"] },
  { name: "Speaking Arts", count: 7, tag: "Speak until the room changes shape.", color: "cyan", events: ["Duologue", "Family Feud", "Potpourri", "Dare to Spell", "Spotlight", "Afreen", "Open Discussion"] },
  { name: "Social", count: 1, tag: "Build a city that gives back.", color: "pink", events: ["Sahyog"] },
  { name: "Quizzing", count: 2, tag: "Questions with a pulse.", color: "yellow", events: ["Bamboozled", "Movie Auction"] },
  { name: "Exciting Pursuits", count: 4, tag: "The unexpected is the main event.", color: "violet", events: ["Prom Night", "Silent Disco", "Jamming Night", "Stage Spectrum"] }
];

const descriptions = {
  "Razzmatazz": "A high-voltage Dance District showcase built for movement, stage presence and full-throttle energy. The confirmed Vivacity ’27 format will be announced soon.",
  "Street Dance": "A Dance District signal shaped by street-style energy, bold choreography and the pulse of the crowd. Official Vivacity ’27 details are coming soon.",
  "Let's Tangle": "A dance experience where connection, rhythm and performance share the frame. The confirmed Vivacity ’27 format is to be announced.",
  "Mudra": "A Dance District spotlight on expression, gesture and storytelling through movement. Vivacity ’27 rules and format will be released soon.",
  "Pump It Up": "A high-tempo dance signal made for performers who bring the energy from the first beat. More Vivacity ’27 information is on its way.",
  "Taal Tarang": "A rhythm-forward dance experience that gives the stage to timing, flow and collective energy. Official details are coming soon.",
  "Battle of Bands": "A Music District stage for live sound, big presence and the rush of a band performance. Vivacity ’27 format and registration details are to be announced.",
  "Gully War": "A Music District signal with a raw, city-side edge and room for voices that refuse to stay quiet. Official event details are coming soon.",
  "Malhaar": "A Music District experience shaped around melody, atmosphere and the joy of live performance. Vivacity ’27 information will be transmitted soon.",
  "Bandish": "A Music District showcase that brings musical expression into focus. The official format for Vivacity ’27 is to be announced.",
  "Aaroh": "A Music District signal designed to let the sound rise, build and take over the room. More event details are coming soon.",
  "Rangshala": "A Drama District stage where stories, characters and theatrical imagination take centre frame. Vivacity ’27 format details are coming soon.",
  "Hunkaar": "A Drama District call for bold voices and a performance that carries beyond the stage. Official Vivacity ’27 information is to be announced.",
  "Mukhauta": "A theatre signal that puts character, transformation and the power of performance in the spotlight. More details are coming soon.",
  "Paddhati": "A Drama District experience rooted in the craft and language of theatre. The Vivacity ’27 format will be released soon.",
  "FMC": "A Photography District challenge for creating images that hold a moment, an idea and a point of view. Official details are coming soon.",
  "Photoboth": "A Photography District space for quick frames, festival energy and memories made in the moment. Vivacity ’27 details are to be announced.",
  "Image Hunt": "A visual pursuit through the festival landscape, with every frame waiting to be discovered. Official format details are coming soon.",
  "Pixels": "A Photography District signal for visual storytellers who see the city differently. The Vivacity ’27 brief will be shared soon.",
  "Perspective": "A photography experience built around the way a single viewpoint can change a whole story. More details are coming soon.",
  "Kalakriti": "A visual-art-and-photography signal that celebrates the details worth looking twice at. The official Vivacity ’27 format is pending.",
  "Vogue": "A Fashion District runway where styling, confidence and a strong point of view meet the spotlight. Vivacity ’27 details are coming soon.",
  "Mr and Ms Viva": "A Fashion District spotlight made for personality, presence and owning the moment. Official Vivacity ’27 information is to be announced.",
  "Tattoo Tales": "An Art District canvas for ideas, linework and stories that stay with you. The confirmed Vivacity ’27 format will be released soon.",
  "Splash": "An Art District burst of colour, imagination and making something impossible to miss. More event details are coming soon.",
  "Eclectic": "A creative signal for work that refuses to fit a single box. Vivacity ’27 format and participation details are to be announced.",
  "Hue-niverse": "An Art District world of colour, texture and creative possibilities. The official Vivacity ’27 brief is coming soon.",
  "Contrasto": "An Art District exploration of contrast, composition and ideas that stand out. More Vivacity ’27 information will arrive soon.",
  "Duologue": "A Speaking Arts exchange where words, timing and performance share the spotlight. Official Vivacity ’27 details are coming soon.",
  "Family Feud": "A Speaking Arts signal built around quick thinking, shared energy and a room that plays along. Format details are to be announced.",
  "Potpourri": "A Speaking Arts mix of ideas, cues and surprises waiting to unfold. The Vivacity ’27 event brief is coming soon.",
  "Dare to Spell": "A language-led challenge for sharp minds and sharper words. Official Vivacity ’27 format and registration are to be announced.",
  "Spotlight": "A Speaking Arts moment for a voice, a point of view and the confidence to own the room. More details are coming soon.",
  "Afreen": "A Speaking Arts signal for expression that leaves its mark after the lights come down. Vivacity ’27 information is to be announced.",
  "Open Discussion": "A space for ideas to meet, challenge and build on each other. The confirmed Vivacity ’27 structure will be shared soon.",
  "Sahyog": "Vivacity’s Social District signal, centred on people coming together for a shared purpose. Official Vivacity ’27 details are coming soon.",
  "Bamboozled": "A Quizzing District challenge for curious minds, unexpected turns and the thrill of a fast answer. Format details are to be announced.",
  "Movie Auction": "A cinema-flavoured quizzing experience where film knowledge meets strategy and instinct. The Vivacity ’27 brief is coming soon.",
  "Prom Night": "An after-hours festival experience where the city changes its tempo and the memories stay switched on. Vivacity ’27 details are coming soon.",
  "Silent Disco": "A late-night signal made for individual soundtracks and a shared dancefloor. Official Vivacity ’27 information is to be announced.",
  "Jamming Night": "An open musical moment for sound, spontaneity and the people who want to keep the night moving. More details are coming soon.",
  "Stage Spectrum": "A festival-stage experience built to bring different creative energies into one live moment. Vivacity ’27 format is to be announced."
};
const eventImages = {
  "Battle of Bands": "public/BOB_Background.jpg",
  "Bandish": "public/Bandish_Background.jpg",
  "Gully War": "public/Gully_War_Background.jpg",
  "Malhaar": "public/malhaar_background.jpg",
  "Aaroh": "public/AAROH_BACKGROUND.jpg",
  "Duologue": "public/Duologue_Background.jpg",
  "Family Feud": "public/FamilyFeuds_Background.jpg",
  "Potpourri": "public/Potpourii_background.jpg",
  "Dare to Spell": "public/Dare_to_spell_background.jpg",
  "Spotlight": "public/Spotlight_background.jpg",
  "Afreen": "public/Afreen_Background.jpg",
  "Open Discussion": "public/OPen mIC Background.jpg",
  "Bamboozled": "public/Bamboozled_background.jpg",
  "Movie Auction": "public/Movie_Auction_Background.jpg",
  "Prom Night": "public/Prom_Niight_background.jpg",
  "Jamming Night": "public/Jamming_Night.jpg",
  "Silent Disco": "public/SILENT_DISCO_BACKGROUND.JPG",
  "Stage Spectrum": "public/Stage Spectrum_background.jpg",
  "Rangshala": "public/Rangshala_Background.jpg",
  "Hunkaar": "public/Hunkaar_Background.jpg",
  "Mukhauta": "public/Mime_Background.jpg",
  "Paddhati": "public/Monoact_Background.jpg",
  "FMC": "public/FXC_Background.jpg",
  "Photoboth": "public/Photoboth_Background.jpg",
  "Image Hunt": "public/Image_Hunt_Background.jpg",
  "Pixels": "public/Pixels_Background.jpg",
  "Perspective": "public/Perspective_Background.jpg",
  "Kalakriti": "public/Kalakriti_Background.jpg",
  "Vogue": "public/Vogue_Background.jpg",
  "Mr and Ms Viva": "public/Mr and mIss Viva.jpg",
  "Tattoo Tales": "public/Tatoo_Tales.jpg",
  "Splash": "public/Splash_Background.jpg",
  "Eclectic": "public/Eclectic_Background.jpg",
  "Hue-niverse": "public/Hue_niverse_Background.jpg",
  "Contrasto": "public/Contrasto_Background.jpg",
  "Sahyog": "public/Sahyog_Background.JPG",
  "Razzmatazz": "public/Razzmatazz_Background.jpg",
  "Street Dance": "public/Street Dance_Background.jpg",
  "Let's Tangle": "public/Let's Tangle_background.jpg",
  "Mudra": "public/Mudra_Background.JPG",
  "Pump It Up": "public/PUMP_IT_UP_BACKGROUND.jpg",
  "Taal Tarang": "public/Taal Tarang_Background.jpg"
};
const allEvents = districts.flatMap(d => d.events.map(name => ({ name, category: d.name, color: d.color, description: descriptions[name] || "Vivacity ’27 details for this event are coming soon.", image: eventImages[name] || "" })));
const districtList = document.getElementById("district-list");
const webNodes = document.getElementById("web-nodes");
const orbitEvents = document.getElementById("orbit-events");
const eventWeb = document.querySelector(".event-web");
const coreTitle = document.getElementById("web-core-title");
const coreDetail = document.getElementById("web-core-detail");
const webPrize = document.getElementById("web-prize");
const webInstruction = document.getElementById("web-instruction");
const flagshipDistricts = districts;
const nodePositions = [[12, 22], [30, 9], [50, 8], [70, 9], [88, 22], [88, 72], [70, 91], [50, 93], [30, 91], [12, 72]];

districtList.innerHTML = districts.map((d, i) => `<a href="#events" class="district ${d.color}" data-category="${d.name}"><span class="district-no">0${i + 1}</span><div><h3>${d.name}</h3><p>${d.tag}</p></div><span class="district-count">${d.count} EVENTS</span><i>↗</i></a>`).join("");
webNodes.innerHTML = flagshipDistricts.map((district, index) => `<button class="web-node ${district.color}" data-category="${district.name}" style="--node-x:${nodePositions[index][0]}%;--node-y:${nodePositions[index][1]}%"><span class="node-pulse"></span><small>0${index + 1} / ${district.count} EVENTS</small><strong>${district.name}</strong></button>`).join("");

function releaseEvents(category) {
  const district = districts.find(item => item.name === category);
  if (!district) return;
  document.querySelectorAll(".web-node").forEach(node => node.classList.toggle("selected", node.dataset.category === category));
  eventWeb.classList.add("district-open");
  coreTitle.innerHTML = district.name.toUpperCase();
  coreDetail.textContent = `${district.count} EVENTS UNLOCKED`;
  webPrize.textContent = "PRIZE POOL · TO BE ANNOUNCED";
  webInstruction.innerHTML = `EVENT SIGNALS UNLOCKED <i>✦</i>`;
  const eventCount = district.events.length;
  const radiusX = eventCount <= 4 ? 35 : 39;
  const radiusY = eventCount <= 4 ? 36 : 39;
  orbitEvents.innerHTML = district.events.map((name, index) => {
    const event = allEvents.find(item => item.name === name && item.category === district.name);
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / eventCount;
    const eventX = 50 + Math.cos(angle) * radiusX;
    const eventY = 50 + Math.sin(angle) * radiusY;
    return `<button class="orbit-event ${district.color}" data-event="${event.name}" data-category="${event.category}" data-description="${event.description}" data-image="${event.image}" style="--event-x:${eventX}%;--event-y:${eventY}%;--event-delay:${index * 115}ms"><span>✦</span>${name}</button>`;
  }).join("");
  orbitEvents.querySelectorAll(".orbit-event").forEach(event => event.addEventListener("click", () => openModal(event.dataset)));
}

webNodes.addEventListener("click", event => { const node = event.target.closest(".web-node"); if (node) releaseEvents(node.dataset.category); });
districtList.addEventListener("click", event => { const district = event.target.closest(".district"); if (district) releaseEvents(district.dataset.category); });

const modal = document.getElementById("event-modal");
const modalImage = document.getElementById("modal-image");
function openModal(data) { document.getElementById("modal-category").textContent = data.category + " DISTRICT"; document.getElementById("modal-name").textContent = data.event; document.getElementById("modal-description").textContent = data.description; modalImage.hidden = !data.image; modalImage.src = data.image; modalImage.alt = data.event + " event"; modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.classList.add("no-scroll"); }
modalImage.addEventListener("error", () => { modalImage.hidden = true; });
function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.classList.remove("no-scroll"); }
modal.addEventListener("click", e => { if (e.target.classList.contains("modal-backdrop") || e.target.closest(".close-modal") || e.target.closest(".close-button")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".nav nav");
if (menuButton && mainNav) {
  const setMenu = open => {
    mainNav.classList.toggle("is-open", open);
    menuButton.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("no-scroll", open);
  };
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.addEventListener("click", () => setMenu(!mainNav.classList.contains("is-open")));
  mainNav.addEventListener("click", event => { if (event.target.closest("a")) setMenu(false); });
  document.addEventListener("click", event => { if (!event.target.closest(".nav") && mainNav.classList.contains("is-open")) setMenu(false); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") setMenu(false); });
}

const loader = document.getElementById("loader"), percentage = document.getElementById("loader-number"); let p = 0;
const loading = setInterval(() => { p = Math.min(p + Math.ceil(Math.random() * 14), 100); percentage.textContent = `${p}%`; if (p === 100) { clearInterval(loading); document.getElementById("loader-enter").classList.add("ready"); } }, 100);
function enterCity() { loader.classList.add("leaving"); setTimeout(() => loader.remove(), 850); }
document.getElementById("loader-enter").addEventListener("click", enterCity); setTimeout(enterCity, 2400);

if (window.matchMedia("(pointer:fine)").matches) {
  const dot = document.querySelector(".cursor-dot"), ring = document.querySelector(".cursor-ring");
  window.addEventListener("mousemove", e => { dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; ring.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; });
  document.querySelectorAll("a, button, input").forEach(el => { el.addEventListener("mouseenter", () => ring.classList.add("hover")); el.addEventListener("mouseleave", () => ring.classList.remove("hover")); });

  const heritageHero = document.querySelector(".hero");
  heritageHero.addEventListener("mousemove", event => {
    const bounds = heritageHero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    heritageHero.style.setProperty("--heritage-x", `${x * 18}px`);
    heritageHero.style.setProperty("--heritage-y", `${y * 9}px`);
  });
  heritageHero.addEventListener("mouseleave", () => {
    heritageHero.style.setProperty("--heritage-x", "0px");
    heritageHero.style.setProperty("--heritage-y", "0px");
  });
}

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("in-view"); }), { threshold: 0.14 });
document.querySelectorAll(".section, .district, .event-card").forEach(el => observer.observe(el));

// Duplicate the past-pronite archive once so its horizontal marquee loops without a visible reset.
const artistRail = document.querySelector(".artist-rail");
if (artistRail) {
  [...artistRail.children].forEach(card => {
    const duplicate = card.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    artistRail.appendChild(duplicate);
  });
}
