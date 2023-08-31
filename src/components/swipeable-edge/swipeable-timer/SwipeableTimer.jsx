import "../swipeable-edge.scss";
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
        <PlayerIcon iconUrl="/src/assets/vectors/timer/sea.svg" title={"sea"} />
        <PlayerIcon
          iconUrl="/src/assets/vectors/timer/bonfire.svg"
          title={"bonfire"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/timer/wind.svg"
          title={"wind"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/timer/rain.svg"
          title={"rain"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/timer/forest.svg"
          title={"forest"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/timer/space.svg"
          title={"space"}
        />
      </div>
    </>
  );
}
