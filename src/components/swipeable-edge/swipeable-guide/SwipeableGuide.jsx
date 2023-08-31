import "../swipeable-edge.scss";
import PlayerIcon from "../../player-icon/PlayerIcon";

export default function SwipeableGuide() {
  return (
    <>
      <h3>What do you need to be guided for</h3>
      <div className="sound-icons">
        <PlayerIcon
          iconUrl="/src/assets/vectors/guide/morning.svg"
          title={"good morning"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/guide/clear-mind.svg"
          title={"clear your mind"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/guide/positivity.svg"
          title={"positive mindset"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/guide/healing.svg"
          title={"heal yourself"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/guide/sleep.svg"
          title={"sleep well"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/guide/good-vibes.svg"
          title={"good vibes"}
        />
      </div>
    </>
  );
}
