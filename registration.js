const EVENTS = {
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

// Add the deployed Google Apps Script web-app URL here when the sheet endpoint is ready.
const GOOGLE_SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbxnDFAltX67Aub1CWQKvsPGRQB3SrkUWOtfAddPh6SBdXXBe9RE2DP_7rTHKgNikLe2VA/exec";
const form = document.getElementById("registration-form");
const groups = document.getElementById("event-groups");
const count = document.getElementById("selected-count");
const selectedEvents = document.getElementById("selected-events");
const status = document.getElementById("form-status");
const allEventNames = Object.values(EVENTS).flat();
const steps = [...document.querySelectorAll(".form-step")];
const stepNumber = document.getElementById("step-number");
const stepIndicators = [...document.querySelectorAll("[data-step-indicator]")];
const collageImages = [
  "AAROH_BACKGROUND.jpg", "Afreen_Background.jpg", "AfterGlow_Background.jpg", "After_Hours_Background.jpg", "All Together_background.jpg", "Archive_City_In_Motion.jpg", "Archive_Lights_Inside.jpg", "BOB_Background.jpg", "Background_Javed_Ali.jpg", "Bamboozled_background.jpg", "Bandish_Background.jpg", "Contrasto_Background.jpg", "Dare_to_spell_background.jpg", "Duologue_Background.jpg", "Eclectic_Background.jpg", "FXC_Background.jpg", "FamilyFeuds_Background.jpg", "Gully_War_Background.jpg", "Headliner_Karan_Aujla.jpg", "Hue_niverse_Background.jpg", "Hunkaar_Background.jpg", "Image_Hunt_Background.jpg", "Jamming_Night.jpg", "Kalakriti_Background.jpg", "Let's Tangle_background.jpg", "Mime_Background.jpg", "Monoact_Background.jpg", "Movie_Auction_Background.jpg", "Mr and mIss Viva.jpg", "Mudra_Background.JPG", "OPen mIC Background.jpg", "PUMP_IT_UP_BACKGROUND.jpg", "Perspective_Background.jpg", "Photoboth_Background.jpg", "Pixels_Background.jpg", "Potpourii_background.jpg", "Prom_Niight_background.jpg", "Rangshala_Background.jpg", "Razzmatazz_Background.jpg", "SILENT_DISCO_BACKGROUND.JPG", "Sahyog_Background.JPG", "Splash_Background.jpg", "Spotlight_background.jpg", "Stage Spectrum_background.jpg", "Street Dance_Background.jpg", "Swaranjali_Background.jpg", "Taal Tarang_Background.jpg", "Tatoo_Tales.jpg", "The_Memory_Background.jpg", "The_Streets_Background.jpg", "Vivacity'27.png", "Vogue_Background.jpg", "malhaar_background.jpg"
];

function renderCollage() {
  const collage = document.getElementById("registration-collage");
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { alpha: true });
  const loadedImages = [];
  let viewportWidth = 0;
  let viewportHeight = 0;

  const resizeCanvas = () => {
    const scale = Math.min(window.devicePixelRatio || 1, 1.5);
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    canvas.width = Math.floor(viewportWidth * scale);
    canvas.height = Math.floor(viewportHeight * scale);
    canvas.style.width = `${viewportWidth}px`;
    canvas.style.height = `${viewportHeight}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    context.clearRect(0, 0, viewportWidth, viewportHeight);
    loadedImages.forEach(({ image, index }) => drawTile(image, index));
  };

  const drawTile = (image, index) => {
    const tileWidth = Math.max(110, Math.min(190, viewportWidth * .13));
    const tileHeight = tileWidth / 1.25;
    const x = ((index * 19) % 100) / 100 * viewportWidth;
    const y = ((index * 31) % 100) / 100 * viewportHeight;
    context.save();
    context.translate(x + tileWidth / 2, y + tileHeight / 2);
    context.rotate(((index % 5) - 2) * Math.PI / 180);
    context.globalAlpha = window.innerWidth <= 800 ? .65 : 1;
    context.filter = "sepia(.45) saturate(.8) contrast(1.1)";
    context.drawImage(image, -tileWidth / 2, -tileHeight / 2, tileWidth, tileHeight);
    context.restore();
  };

  const appendImages = (start, batchSize) => {
    collageImages.slice(start, start + batchSize).forEach((filename, offset) => {
      const index = start + offset;
      const image = new Image();
      image.decoding = "async";
      image.fetchPriority = "low";
      image.onload = () => { loadedImages.push({ image, index }); drawTile(image, index); };
      image.src = `public/${filename}`;
    });
    const next = start + batchSize;
    if (next < collageImages.length) {
      const schedule = window.requestIdleCallback || (callback => setTimeout(callback, 180));
      schedule(() => appendImages(next, 6));
    }
  };
  collage.replaceChildren(canvas);
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });
  appendImages(0, 6);
}

function showStep(step) {
  steps.forEach(item => {
    const active = Number(item.dataset.step) === step;
    item.hidden = !active;
    item.classList.toggle("active", active);
  });
  stepNumber.textContent = String(step).padStart(3, "0");
  stepIndicators.forEach(indicator => {
    const indicatorStep = Number(indicator.dataset.stepIndicator);
    indicator.classList.toggle("active", indicatorStep === step);
    indicator.classList.toggle("complete", indicatorStep < step);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderEvents() {
  groups.innerHTML = Object.entries(EVENTS).map(([category, events]) => `<section class="event-group"><h3>${category.toUpperCase()}</h3><div class="event-options">${events.map(event => `<label class="event-option"><input type="checkbox" name="event" value="${event}" />${event}</label>`).join("")}</div></section>`).join("");
  groups.addEventListener("change", updateSelection);
}

function getSelection() {
  return [...form.querySelectorAll('input[name="event"]:checked')].map(input => input.value);
}

function updateSelection() {
  const selection = getSelection();
  count.textContent = selection.length;
  selectedEvents.value = selection.join(", ");
}

document.getElementById("select-all").addEventListener("click", () => {
  const inputs = [...form.querySelectorAll('input[name="event"]')];
  const shouldSelect = getSelection().length !== allEventNames.length;
  inputs.forEach(input => { input.checked = shouldSelect; });
  updateSelection();
  document.getElementById("select-all").firstChild.textContent = shouldSelect ? "CLEAR ALL EVENTS " : "SELECT ALL EVENTS ";
});

document.querySelector("[data-next]").addEventListener("click", () => {
  const profileStep = steps[0];
  const profileFields = [...profileStep.querySelectorAll("input, select")];
  if (profileFields.every(field => field.checkValidity())) showStep(2);
  else profileFields.find(field => !field.checkValidity())?.reportValidity();
});
document.querySelector("[data-back]").addEventListener("click", () => showStep(1));

form.addEventListener("submit", async event => {
  event.preventDefault();
  const selection = getSelection();
  if (!selection.length) {
    status.textContent = "SELECT AT LEAST ONE EVENT TO CONTINUE.";
    return;
  }
  const payload = Object.fromEntries(new FormData(form));
  payload.selectedEvents = selection.join(", ");
  payload.submittedAt = new Date().toISOString();
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "TRANSMITTING...";
  status.textContent = "";

  try {
    if (GOOGLE_SHEETS_ENDPOINT) {
      await fetch(GOOGLE_SHEETS_ENDPOINT, { method: "POST", mode: "no-cors", body: JSON.stringify(payload) });
    } else {
      localStorage.setItem("vivacityRegistration", JSON.stringify(payload));
      document.getElementById("registration-result").textContent = "Test submission saved only in this browser. Connect the Google Sheets endpoint before accepting live registrations.";
    }
    form.hidden = true;
    document.getElementById("registration-success").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    submitButton.disabled = false;
    submitButton.textContent = "TRANSMIT REGISTRATION ↗";
    status.textContent = "TRANSMISSION FAILED. PLEASE TRY AGAIN.";
  }
});

renderCollage();
renderEvents();
updateSelection();
