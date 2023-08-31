import "../swipeable-edge.scss";
import morningIcon from "../../../assets/vectors/guide/morning.svg";
import clearIcon from "../../../assets/vectors/guide/clear-mind.svg";
import positivityIcon from "../../../assets/vectors/guide/positivity.svg";
import healingIcon from "../../../assets/vectors/guide/healing.svg";
import sleepIcon from "../../../assets/vectors/guide/sleep.svg";
import vibesIcon from "../../../assets/vectors/guide/good-vibes.svg";

import PlayerIcon from "../../player-icon/PlayerIcon";

export default function SwipeableGuide() {
  return (
    <>
      <h3>What do you need to be guided for</h3>
      <div className="sound-icons">
        <PlayerIcon iconUrl={morningIcon} title={"good morning"} />
        <PlayerIcon iconUrl={clearIcon} title={"clear your mind"} />
        <PlayerIcon iconUrl={positivityIcon} title={"positive mindset"} />
        <PlayerIcon iconUrl={healingIcon} title={"heal yourself"} />
        <PlayerIcon iconUrl={sleepIcon} title={"sleep well"} />
        <PlayerIcon iconUrl={vibesIcon} title={"good vibes"} />
      </div>
    </>
  );
}
