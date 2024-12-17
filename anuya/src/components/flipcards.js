import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../styles/flipcards.css";

const Flipcard = () => {
  // State to handle flips for three cards
  const [flipStates, setFlipStates] = useState([false, false, false]);

  // Handle flip for individual cards
  const handleFlip = (index) => {
    setFlipStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  // Image URLs for the flipcards
  const frontImages = [
    "https://res.cloudinary.com/dj9sie6nl/image/upload/v1734428380/Anuya/menycards/flip1.png",
    "https://res.cloudinary.com/dj9sie6nl/image/upload/v1734428380/Anuya/menycards/flip2.png",
    "https://res.cloudinary.com/dj9sie6nl/image/upload/v1734428380/Anuya/menycards/flip3.png",
  ];

  return (
    <div className="flipcard-container">
      {frontImages.map((image, index) => (
        <ReactCardFlip
          key={index}
          isFlipped={flipStates[index]}
          flipDirection="horizontal"
        >
          {/* Front side */}
          <div
            className="flipcard"
            onClick={() => handleFlip(index)}
          >
            <img
              src={image}
              alt={`Gallery artwork ${index + 1}`}
              className="flipcard-img"
            />
          </div>

          {/* Back side */}
          <div
            className="flipcard flipcard-back"
            onClick={() => handleFlip(index)}
          >
            <p className="flipcard-text">
              Original artwork available.  
              <br /> Click to flip back.
            </p>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  );
};

export default Flipcard;
