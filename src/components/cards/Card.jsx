import "./card.scss";
import { useEffect } from "react";

export default function Card({ lineTop, title, bgUrl, handleClick }) {
  //set the background image
  const backgroundImageUrl = `url(${bgUrl})`;

  //animate cards with delay
  useEffect(() => {
    const cards = document.querySelectorAll(".optionCard");
    let initialTime = 0.5;

    cards.forEach((card) => {
      initialTime++;
      card.style.animationDuration = `${initialTime}s`;
    });
  }, []);

  return (
    <div
      className="optionCard"
      style={{ backgroundImage: backgroundImageUrl }}
      onClick={handleClick}
    >
      <div className="overlayed">
        <p>{lineTop}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
