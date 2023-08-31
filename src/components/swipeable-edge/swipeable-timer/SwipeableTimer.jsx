import "../swipeable-edge.scss";
import bonfireIcon from "../../../assets/vectors/timer/bonfire.svg";
import seaIcon from "../../../assets/vectors/timer/sea.svg";
import windIcon from "../../../assets/vectors/timer/wind.svg";
import rainIcon from "../../../assets/vectors/timer/rain.svg";
import forestIcon from "../../../assets/vectors/timer/forest.svg";
import spaceIcon from "../../../assets/vectors/timer/space.svg";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import PlayerIcon from "../../player-icon/PlayerIcon";
import { setTime, setInitialTime } from "../../../redux/meditation";
import { useSelector, useDispatch } from "react-redux";

export default function SwipeableTimer() {
  const time = useSelector((state) => state.meditation.time);
  const dispatch = useDispatch();

  //handle change slider range value
  function handleRange(e) {
    dispatch(setTime(e.target.value));
    dispatch(setInitialTime(e.target.value));
  }
  return (
    <>
      <h3>Select the time amount and the mood</h3>
      <div className="slidecontainer">
        <Box className="range">
          <Slider
            className="slider"
            max={60}
            min={1}
            value={time}
            valueLabelFormat={(value) => `${value} min`}
            onChange={handleRange}
            aria-label="Default"
            valueLabelDisplay="on"
          />
        </Box>
      </div>
      <div className="sound-icons">
        <PlayerIcon iconUrl={seaIcon} title={"sea"} />
        <PlayerIcon iconUrl={bonfireIcon} title={"bonfire"} />
        <PlayerIcon iconUrl={windIcon} title={"wind"} />
        <PlayerIcon iconUrl={rainIcon} title={"rain"} />
        <PlayerIcon iconUrl={forestIcon} title={"forest"} />
        <PlayerIcon iconUrl={spaceIcon} title={"space"} />
      </div>
    </>
  );
}
