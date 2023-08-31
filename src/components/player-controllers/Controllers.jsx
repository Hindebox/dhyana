import homeIcon from "../../assets/vectors/controls/home.svg";
import pauseIcon from "../../assets/vectors/controls/pause.svg";
import playIcon from "../../assets/vectors/controls/play.svg";
import resetIcon from "../../assets/vectors/controls/reset.svg";
import { useState, useEffect } from "react";
import {
  setTime,
  setSeconds,
  setDisplaySwipe,
  setVideo,
} from "../../redux/meditation";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Controllers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //play or pause
  const [playControl, setPlayControl] = useState(false);
  //know the selected card category
  const selectedCard = useSelector((state) => state.meditation.card);
  //time(minutes) from the range slider
  const minutes = useSelector((state) => state.meditation.time);
  //seconds in timer
  const seconds = useSelector((state) => state.meditation.seconds);
  //keep the initial time for the reset action
  const initialTime = useSelector((state) => state.meditation.initialTime);

  //if playControl is active start the timer
  useEffect(() => {
    const bgVideo = document.querySelector(".video-bg");
    let timer = null;

    if (playControl) {
      timer = setInterval(() => {
        if (seconds > 0) {
          dispatch(setSeconds(seconds - 1));
        } else {
          if (minutes === 0 && seconds === 0) {
            bgVideo.pause();
            clearInterval(timer);
            setPlayControl(false);
            return;
          } else {
            dispatch(setTime(minutes - 1));
            dispatch(setSeconds(59));
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [seconds, playControl]);

  //HANDLE play or pause
  function handlePlay() {
    setPlayControl(!playControl);

    //click to play or stop the video in bg
    if (selectedCard !== "timer") {
      const bgVideo = document.querySelector(".video-bg");
      if (playControl) {
        bgVideo.pause();
      } else bgVideo.play();
    }
  }
  //HANDLE reset
  function handleReset() {
    dispatch(setTime(initialTime));
    dispatch(setSeconds(0));
    setPlayControl(false);
    //reset the bg video
    if (selectedCard !== "timer") {
      const bgVideo = document.querySelector(".video-bg");
      bgVideo.currentTime = 0;
      bgVideo.pause();
    }
  }
  //HANDLE back home
  function handleBackHome() {
    dispatch(setTime(10)); //reset the range slider to the defualt value
    dispatch(setSeconds(0));
    dispatch(setDisplaySwipe(false)); //hide swipeable edge
    dispatch(setVideo("/src/assets/videos/timer-default-bg.mp4"));
    navigate("/");
  }

  return (
    <div className="controls">
      <img
        src={homeIcon}
        alt="home icon"
        className="home"
        onClick={handleBackHome}
      />
      <img
        src={playControl ? { pauseIcon } : { playIcon }}
        alt="play or pause icon"
        className="pause"
        onClick={handlePlay}
      />
      <img
        src={resetIcon}
        alt="reset icon"
        className="reset"
        onClick={handleReset}
      />
    </div>
  );
}
