import "../swipeable-edge.scss";
import batteryIcon from "../../../assets/vectors/preset/lowbattery.svg";
import anxietyIcon from "../../../assets/vectors/preset/anxiety.svg";
import selfestemeIcon from "../../../assets/vectors/preset/selfesteme.svg";
import insecurityIcon from "../../../assets/vectors/preset/insecurity.svg";
import insomniaIcon from "../../../assets/vectors/preset/insomnia.svg";
import confusionIcon from "../../../assets/vectors/preset/confusion.svg";

import PlayerIcon from "../../player-icon/PlayerIcon";

export default function SwipeablePreset() {
  return (
    <>
      <h3>Select an issue</h3>
      <div className="sound-icons">
        <PlayerIcon iconUrl={batteryIcon} title={"low battery"} />
        <PlayerIcon iconUrl={anxietyIcon} title={"anxiety"} />
        <PlayerIcon iconUrl={selfestemeIcon} title={"self esteem"} />
        <PlayerIcon iconUrl={insecurityIcon} title={"insecurity"} />
        <PlayerIcon iconUrl={insomniaIcon} title={"insomnia"} />
        <PlayerIcon iconUrl={confusionIcon} title={"confusion"} />
      </div>
    </>
  );
}
