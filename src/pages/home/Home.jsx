import "./home.scss";
import guideBg from "../../assets/images/personal-guide.jpg";
import timerBg from "../../assets/images/your-timer.jpg";
import presetBg from "../../assets/images/choose-preset.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/cards/Card";
import SwipeableEdge from "../../components/swipeable-edge/SwipeableEdge";
import { setCard, setDisplaySwipe } from "../../redux/meditation";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const swipe = useSelector((state) => state.meditation.displaySwipe);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function handleSwipe(card) {
    dispatch(setDisplaySwipe(!swipe));
    dispatch(setCard(card));
  }

  return (
    <div className="home">
      <div className="home-navbar">
        <Navbar />
      </div>

      <h1>Take a moment for yourself</h1>
      {/* DESKTOP cards */}
      <div className="optionCards">
        <Card
          lineTop="Meditation"
          title="Guide"
          bgUrl={guideBg}
          handleClick={() => handleSwipe("guide")}
        />
        <Card
          lineTop="Set your own"
          title="Timer"
          bgUrl={timerBg}
          handleClick={() => handleSwipe("timer")}
        />
        <Card
          lineTop="Choose a"
          title="Preset"
          bgUrl={presetBg}
          handleClick={() => handleSwipe("preset")}
        />
      </div>
      {/* MOBILE slider */}
      <div className="sliderMobile">
        <Slider {...sliderSettings}>
          <div onClick={() => handleSwipe("guide")}>
            <Card lineTop="Meditation" title="Guide" bgUrl={guideBg} />
          </div>
          <div onClick={() => handleSwipe("timer")}>
            <Card lineTop="Set your own" title="Timer" bgUrl={timerBg} />
          </div>
          <div onClick={() => handleSwipe("preset")}>
            <Card lineTop="Choose a" title="Preset" bgUrl={presetBg} />
          </div>
        </Slider>
      </div>

      {/* hidden swipeble edge */}
      <SwipeableEdge visibleTrigger={swipe ? "visible" : ""} />
    </div>
  );
}
