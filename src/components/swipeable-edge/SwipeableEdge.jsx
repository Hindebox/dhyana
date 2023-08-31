import "./swipeable-edge.scss";
import SwipeableTimer from "./swipeable-timer/SwipeableTimer";
import SwipeableGuide from "./swipeable-guide/SwipeableGuide";
import SwipeablePreset from "./swipeable-preset/SwipeablePreset";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDisplaySwipe } from "../../redux/meditation";

export default function SwipeableEdge({ visibleTrigger }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedCard = useSelector((state) => state.meditation.card);
  const swipe = useSelector((state) => state.meditation.displaySwipe);

  //click to go to the timer page
  function handleClick() {
    navigate("/meditate");
  }

  //click to hide the swipeable edge
  function escSwipe() {
    if (swipe) dispatch(setDisplaySwipe(false));
  }

  return (
    <div className={`swipeableEdge ${visibleTrigger}`}>
      <div onClick={escSwipe} className="closeSwipe">
        <ExpandMoreIcon />
      </div>
      {/* display content based on the selected card */}
      {selectedCard === "timer" && <SwipeableTimer />}
      {selectedCard === "guide" && <SwipeableGuide />}
      {selectedCard === "preset" && <SwipeablePreset />}
      <button onClick={handleClick}>start now</button>
    </div>
  );
}
