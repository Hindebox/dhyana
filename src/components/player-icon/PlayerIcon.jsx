import "./player-icon.scss";
import videoDB from "../../videoDB";
import { setVideo, setTime, setInitialTime } from "../../redux/meditation";
import { useSelector, useDispatch } from "react-redux";

export default function PlayerIcon({ iconUrl, title, clickedIcon }) {
  //video selection
  const video = useSelector((state) => state.meditation.video);
  const selectedCard = useSelector((state) => state.meditation.card);
  const selectedIcon = videoDB.find((video) => video.title === title);
  const dispatch = useDispatch();

  //handle the bg of the selected icon
  function handleIconSelection(e) {
    //set the background video
    dispatch(setVideo(selectedIcon.videoUrl));
    //set the timer for guides
    if (selectedCard === "guide" || selectedCard === "preset") {
      dispatch(setTime(selectedIcon?.time));
      dispatch(setInitialTime(selectedIcon?.time));
    }
    //style of clicked icon
    const iconDivs = document.querySelectorAll(".player-icon");
    iconDivs.forEach((div) => {
      div.style.backgroundColor = "transparent";
    });
    const currentDiv = e.target.parentElement;
    currentDiv.style.backgroundColor = "#7698b3";
  }

  return (
    <div className="player-icon-container">
      <div className="player-icon" onClick={handleIconSelection}>
        <img src={iconUrl} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
}
