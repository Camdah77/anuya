import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../styles/flipcards.css";

const Flipcard = () => {
  // State to handle flips for cards
  const [hoverStates, setHoverStates] = useState([false, false, false, false, false, false]);

  // Image URLs and headings for the flipcards
  const cards = [
    {
      image: "https://res.cloudinary.com/dj9sie6nl/image/upload/v1734428380/Anuya/menycards/flip1.png",
      text: "Original Art",
    },
    {
      image: "https://res.cloudinary.com/dj9sie6nl/image/upload/v1734428380/Anuya/menycards/flip2.png",
      text: "Printstudio",
    },
    {
      image: "https://res.cloudinary.com/dj9sie6nl/image/upload/v1734428380/Anuya/menycards/flip3.png",
      text: "Interior",
    },
    {
      image: "https://res.cloudinary.com/dj9sie6nl/image/upload/v1734428380/Anuya/menycards/flip4.png",
      text: "Camilla - My Story",
    },
    {
      image: "https://res.cloudinary.com/dj9sie6nl/image/upload/v1734428380/Anuya/menycards/flip8.png",
      text: "Sold Art",
    },
    {
      image: "https://res.cloudinary.com/dj9sie6nl/image/upload/v1734428380/Anuya/menycards/flip6.png",
      text: "Exhibitions",
    },
  ];

  // Handle hover states
  const handleMouseEnter = (index) => {
    setHoverStates((prev) =>
      prev.map((state, i) => (i === index ? true : state))
    );
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prev) =>
      prev.map((state, i) => (i === index ? false : state))
    );
  };

  return (
    <div className="flipcard-container">
      {cards.map((card, index) => (
        <ReactCardFlip
          key={index}
          isFlipped={hoverStates[index]}
          flipDirection="horizontal"
        >
          {/* Front Side */}
          <div
            className="flipcard"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="flipcard-heading">{card.text}</div>
            <img
              src={card.image}
              alt={card.text}
              className="flipcard-img"
            />
          </div>

          {/* Back Side */}
          <div
            className="flipcard flipcard-back"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <p className="flipcard-text">
              {card.text} - Explore More
            </p>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  );
};

export default Flipcard;
