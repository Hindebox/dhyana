import "./meditate.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import Timer from "../../components/timer/Timer";
import Controllers from "../../components/player-controllers/Controllers";

export default function Meditate() {
  const [videoReady, setVideoReady] = useState(false);
  //know the selected card category
  const selectedCard = useSelector((state) => state.meditation.card);
  //video background
  const video = useSelector((state) => state.meditation.video);
  //if the selected card is the timer one set autoplay and loop
  const onAttribute = selectedCard === "timer";

  useEffect(() => {
    const videoElement = document.querySelector(".video-bg");

    const handleLoadedData = () => {
      setVideoReady(true);
    };

    // Add event listener to listen for the "loadeddata" event
    videoElement.addEventListener("loadeddata", handleLoadedData);

    // Clean up the event listener
    return () => {
      videoElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  return (
    <>
      {!videoReady ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}
