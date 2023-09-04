import { useSelector } from "react-redux";

export default function Timer() {
  //time from the range slider
  const minutes = useSelector((state) => state.meditation.time);
  //seconds in timer
  const seconds = useSelector((state) => state.meditation.seconds);

  return (
    <div className="timer">
      <h2>{minutes < 10 ? `0${minutes}` : minutes}</h2>
      <h3>:</h3>
      <h2>{seconds < 10 ? `0${seconds}` : seconds}</h2>
    </div>
  );
}
