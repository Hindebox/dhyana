import "../swipeable-edge.scss";
import PlayerIcon from "../../player-icon/PlayerIcon";

export default function SwipeablePreset() {
  return (
    <>
      <h3>Select an issue</h3>
      <div className="sound-icons">
        <PlayerIcon
          iconUrl="/src/assets/vectors/preset/lowbattery.svg"
          title={"low battery"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/preset/anxiety.svg"
          title={"anxiety"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/preset/selfesteme.svg"
          title={"self esteeme"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/preset/insecurity.svg"
          title={"insecurity"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/preset/insomnia.svg"
          title={"insomnia"}
        />
        <PlayerIcon
          iconUrl="/src/assets/vectors/preset/confusion.svg"
          title={"confusion"}
        />
      </div>
    </>
  );
}
