export const districts = [
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

const imageFiles = {
  "Battle of Bands": "BOB_Background.webp", Bandish: "Bandish_Background.webp", "Gully War": "Gully_War_Background.webp", Malhaar: "malhaar_background.webp", Aaroh: "AAROH_BACKGROUND.webp", Duologue: "Duologue_Background.webp", "Family Feud": "FamilyFeuds_Background.webp", Potpourri: "Potpourii_background.webp", "Dare to Spell": "Dare_to_spell_background.webp", Spotlight: "Spotlight_background.webp", Afreen: "Afreen_Background.webp", "Open Discussion": "OPen mIC Background.webp", Bamboozled: "Bamboozled_background.webp", "Movie Auction": "Movie_Auction_Background.webp", "Prom Night": "Prom_Niight_background.webp", "Jamming Night": "Jamming_Night.webp", "Silent Disco": "SILENT_DISCO_BACKGROUND.webp", "Stage Spectrum": "Stage Spectrum_background.webp", Rangshala: "Rangshala_Background.webp", Hunkaar: "Hunkaar_Background.webp", Mukhauta: "Mime_Background.webp", Paddhati: "Monoact_Background.webp", FMC: "FXC_Background.webp", Photoboth: "Photoboth_Background.webp", "Image Hunt": "Image_Hunt_Background.webp", Pixels: "Pixels_Background.webp", Perspective: "Perspective_Background.webp", Kalakriti: "Kalakriti_Background.webp", Vogue: "Vogue_Background.webp", "Mr and Ms Viva": "Mr and mIss Viva.webp", "Tattoo Tales": "Tatoo_Tales.webp", Splash: "Splash_Background.webp", Eclectic: "Eclectic_Background.webp", "Hue-niverse": "Hue_niverse_Background.webp", Contrasto: "Contrasto_Background.webp", Sahyog: "Sahyog_Background.webp", Razzmatazz: "Razzmatazz_Background.webp", "Street Dance": "Street Dance_Background.webp", "Let's Tangle": "Let's Tangle_background.webp", Mudra: "Mudra_Background.webp", "Pump It Up": "PUMP_IT_UP_BACKGROUND.webp", "Taal Tarang": "Taal Tarang_Background.webp"
};

const assetUrl = filename => `${import.meta.env.BASE_URL}${filename}`;

export const allEvents = districts.flatMap(district => district.events.map(name => ({
  name,
  category: district.name,
  color: district.color,
  image: imageFiles[name] ? assetUrl(imageFiles[name]) : "",
  description: `${name} is a ${district.name} District experience built for Vivacity '27. Official format and registration details are coming soon.`
})));

export const collageImages = [
  "AAROH_BACKGROUND.webp", "Afreen_Background.webp", "AfterGlow_Background.webp", "After_Hours_Background.webp", "All Together_background.webp", "Archive_City_In_Motion.webp", "Archive_Lights_Inside.webp", "BOB_Background.webp", "Background_Javed_Ali.webp", "Bamboozled_background.webp", "Bandish_Background.webp", "Contrasto_Background.webp", "Dare_to_spell_background.webp", "Duologue_Background.webp", "Eclectic_Background.webp", "FXC_Background.webp", "FamilyFeuds_Background.webp", "Gully_War_Background.webp", "Headliner_Karan_Aujla.webp", "Hue_niverse_Background.webp", "Hunkaar_Background.webp", "Image_Hunt_Background.webp", "Jamming_Night.webp", "Kalakriti_Background.webp", "Let's Tangle_background.webp", "Mime_Background.webp", "Monoact_Background.webp", "Movie_Auction_Background.webp", "Mr and mIss Viva.webp", "Mudra_Background.webp", "OPen mIC Background.webp", "PUMP_IT_UP_BACKGROUND.webp", "Perspective_Background.webp", "Photoboth_Background.webp", "Pixels_Background.webp", "Potpourii_background.webp", "Prom_Niight_background.webp", "Rangshala_Background.webp", "Razzmatazz_Background.webp", "SILENT_DISCO_BACKGROUND.webp", "Sahyog_Background.webp", "Splash_Background.webp", "Spotlight_background.webp", "Stage Spectrum_background.webp", "Street Dance_Background.webp", "Swaranjali_Background.webp", "Taal Tarang_Background.webp", "Tatoo_Tales.webp", "The_Memory_Background.webp", "The_Streets_Background.webp", "Vivacity'27.webp", "Vogue_Background.webp", "malhaar_background.webp"
];

export const googleSheetsEndpoint = "https://script.google.com/macros/s/AKfycbxnDFAltX67Aub1CWQKvsPGRQB3SrkUWOtfAddPh6SBdXXBe9RE2DP_7rTHKgNikLe2VA/exec";
