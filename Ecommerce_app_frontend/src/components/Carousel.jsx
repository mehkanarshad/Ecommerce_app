import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Carousel.css";
import {
  fa500px,
  faAdn,
  faAmazon,
  faAndroid,
  faApple,
  faBehance,
  faBitcoin,
  faDropbox,
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faPinterest,
  faReddit,
  faSnapchat,
  faSpotify,
  faTumblr,
  faTwitter,
  faVimeo,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  fa500px,
  faAdn,
  faAmazon,
  faAndroid,
  faApple,
  faBehance,
  faBitcoin,
  faDropbox,
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faPinterest,
  faReddit,
  faSnapchat,
  faSpotify,
  faTumblr,
  faTwitter,
  faVimeo,
  faWhatsapp,
  faYoutube
);
const brands = [
  <FontAwesomeIcon icon={faApple} />,
  <FontAwesomeIcon icon={faAmazon} />,
  <FontAwesomeIcon icon={faAdn} />,
  <FontAwesomeIcon icon={fa500px} />,
  <FontAwesomeIcon icon={faAndroid} />,
  <FontAwesomeIcon icon={faBehance} />,
  <FontAwesomeIcon icon={faBitcoin} />,
  <FontAwesomeIcon icon={faDropbox} />,
  <FontAwesomeIcon icon={faFacebook} />,
  <FontAwesomeIcon icon={faGithub} />,
  <FontAwesomeIcon icon={faGoogle} />,
  <FontAwesomeIcon icon={faInstagram} />,
  <FontAwesomeIcon icon={faLinkedin} />,
  <FontAwesomeIcon icon={faPinterest} />,
  <FontAwesomeIcon icon={faReddit} />,
  <FontAwesomeIcon icon={faSnapchat} />,
  <FontAwesomeIcon icon={faSpotify} />,
  <FontAwesomeIcon icon={faTumblr} />,
  <FontAwesomeIcon icon={faTwitter} />,
  <FontAwesomeIcon icon={faVimeo} />,
  <FontAwesomeIcon icon={faWhatsapp} />,
  <FontAwesomeIcon icon={faYoutube} />,
];
const extendedBrands = [...brands, ...brands];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={prevSlide}>
        {" "}
        &lt;{" "}
      </button>
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 10}%)` }}
        >
          {extendedBrands.map((brand, i) => (
            <div key={i} className="carousel-item">
              {brand}
            </div>
          ))}
        </div>
      </div>
      <button className="next-btn" onClick={nextSlide}>
        {" "}
        &gt;{" "}
      </button>
    </div>
  );
}
