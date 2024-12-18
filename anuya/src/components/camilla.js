import React from 'react';
import "../styles/camilla.css";

const Camilla = () => {
  return (
    <div>
      <div className="app-heading">This is my story</div>
      <div className="container">
        <div className="row">
          {/* First column with text */}
          <div className="col">
            <div className="text">
              <p>Your text content goes here.</p>
            </div>
          </div>
          
          {/* Second column with image */}
          <div className="col">
            <div className="cdimage">
              <img
                src="https://res.cloudinary.com/dj9sie6nl/image/upload/v1730892347/Anuya/Camilla.png"
                alt="Camilla"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Camilla;
