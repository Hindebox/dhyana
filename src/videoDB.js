import axios from "axios";
const apiKey = "AIzaSyB6heMzMub6S0k3BB6wR-ipShpvFX_gj5k";
const searchQuery = "react tutorial";

const videoDB = [
  //timer
  {
    title: "sea",
    videoUrl: "/src/assets/videos/sea.mp4",
  },
  {
    title: "bonfire",
    videoUrl: "/src/assets/videos/bonfire.mp4",
  },
  {
    title: "wind",
    videoUrl: "/src/assets/videos/wind.mp4",
  },
  {
    title: "rain",
    videoUrl: "/src/assets/videos/rain.mp4",
  },
  {
    title: "forest",
    videoUrl: "/src/assets/videos/forest.mp4",
  },
  {
    title: "space",
    videoUrl: "/src/assets/videos/space.mp4",
  },
  //guides
  {
    title: "good morning",
    videoUrl: "/src/assets/videos/guides/morning.mp4",
    time: 12,
  },
  {
    title: "clear your mind",
    videoUrl: "/src/assets/videos/guides/clear-mind.mp4",
    time: 11,
  },
  {
    title: "positive mindset",
    videoUrl: "/src/assets/videos/guides/positivity.mp4",
    time: 11,
  },
  {
    title: "heal yourself",
    videoUrl: "/src/assets/videos/guides/healing.mp4",
    time: 15,
  },
  {
    title: "sleep well",
    videoUrl: "/src/assets/videos/guides/sleep.mp4",
    time: 12,
  },
  {
    title: "good vibes",
    videoUrl: "/src/assets/videos/guides/good-vibes.mp4",
    time: 16,
  },
  //presets
  {
    title: "low battery",
    videoUrl: "/src/assets/videos/preset/energy.mp4",
    time: 10,
  },
  {
    title: "anxiety",
    videoUrl: "/src/assets/videos/preset/anxiety.mp4",
    time: 15,
  },
  {
    title: "self esteeme",
    videoUrl: "/src/assets/videos/preset/esteeme.mp4",
    time: 15,
  },
  {
    title: "insecurity",
    videoUrl: "/src/assets/videos/preset/insecurity.mp4",
    time: 20,
  },
  {
    title: "insomnia",
    videoUrl: "/src/assets/videos/preset/sleep.mp4",
    time: 15,
  },
  {
    title: "confusion",
    videoUrl: "/src/assets/videos/preset/confusion.mp4",
    time: 15,
  },
];

export default videoDB;
