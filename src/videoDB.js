//for the Timer
import seaVid from "./assets/videos/sea.mp4";
import bonfireVid from "./assets/videos/bonfire.mp4";
import windVid from "./assets/videos/wind.mp4";
import rainVid from "./assets/videos/rain.mp4";
import forestVid from "./assets/videos/forest.mp4";
import spaceVid from "./assets/videos/space.mp4";

//for guides
import morningGuide from "./assets/videos/guides/morning.mp4";
import clearGuide from "./assets/videos/guides/clear-mind.mp4";
import positivityGuide from "./assets/videos/guides/positivity.mp4";
import healingGuide from "./assets/videos/guides/healing.mp4";
import sleepGuide from "./assets/videos/guides/sleep.mp4";
import goodVibesGuide from "./assets/videos/guides/good-vibes.mp4";

//for presets
import energyPreset from "./assets/videos/preset/energy.mp4";
import anxietyPreset from "./assets/videos/preset/anxiety.mp4";
import esteemePreset from "./assets/videos/preset/esteeme.mp4";
import insecurityPreset from "./assets/videos/preset/insecurity.mp4";
import sleepPreset from "./assets/videos/preset/sleep.mp4";
import confusionPreset from "./assets/videos/preset/confusion.mp4";

const videoDB = [
  //timer
  {
    title: "sea",
    videoUrl: seaVid,
  },
  {
    title: "bonfire",
    videoUrl: bonfireVid,
  },
  {
    title: "wind",
    videoUrl: windVid,
  },
  {
    title: "rain",
    videoUrl: rainVid,
  },
  {
    title: "forest",
    videoUrl: forestVid,
  },
  {
    title: "space",
    videoUrl: spaceVid,
  },

  //guides
  {
    title: "good morning",
    videoUrl: morningGuide,
    time: 12,
  },
  {
    title: "clear your mind",
    videoUrl: clearGuide,
    time: 11,
  },
  {
    title: "positive mindset",
    videoUrl: positivityGuide,
    time: 11,
  },
  {
    title: "heal yourself",
    videoUrl: healingGuide,
    time: 15,
  },
  {
    title: "sleep well",
    videoUrl: sleepGuide,
    time: 12,
  },
  {
    title: "good vibes",
    videoUrl: goodVibesGuide,
    time: 16,
  },

  //presets
  {
    title: "low battery",
    videoUrl: energyPreset,
    time: 10,
  },
  {
    title: "anxiety",
    videoUrl: anxietyPreset,
    time: 15,
  },
  {
    title: "self esteeme",
    videoUrl: esteemePreset,
    time: 15,
  },
  {
    title: "insecurity",
    videoUrl: insecurityPreset,
    time: 20,
  },
  {
    title: "insomnia",
    videoUrl: sleepPreset,
    time: 15,
  },
  {
    title: "confusion",
    videoUrl: confusionPreset,
    time: 15,
  },
];

export default videoDB;
