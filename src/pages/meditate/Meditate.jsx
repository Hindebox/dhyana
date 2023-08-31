import "./meditate.scss";
import { useSelector } from "react-redux";

import Timer from "../../components/timer/Timer";
import Controllers from "../../components/player-controllers/Controllers";

export default function Meditate() {
  //know the selected card category
  const selectedCard = useSelector((state) => state.meditation.card);
  //video background
  const video = useSelector((state) => state.meditation.video);
  //if the selected card is the timer one set autoplay and loop
  const onAttribute = selectedCard === "timer";

  return (
    <div className="meditate-page">
      {/* bg video */}
      <div className="video-container">
        <video
          autoPlay={onAttribute}
          loop={onAttribute}
          playsInline
          className="video-bg"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="meditation-sets">
        <div className="overlay-timer">
          <Timer />
          <Controllers />
        </div>
      </div>
    </div>
  );
}
