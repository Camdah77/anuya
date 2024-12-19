import React, { useState } from 'react';
import "../styles/camilla.css";

const Gallery = () => {
  const [content, setContent] = useState(""); // State to store loaded text

  const loadDoc = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      setContent(this.responseText); // Update state with the response
    };
    xhttp.open("GET", "/camilla.txt", true);
    xhttp.send();
  };

  return (
    <div>
      <div className="app-heading">This is my story</div>
      <div className="container">
        <div className="row">
          {/* First column with text */}
          <div className="col">
            <div className="text">
            <button type="button" onClick={loadDoc}>Read More</button>
         {/* Display the content */}
      <div id="demo">{content}</div>   
                
                
                
      <div className="col">
            <div className="cdimage">
              <img
                src="https://res.cloudinary.com/dj9sie6nl/image/upload/v1730892347/Anuya/Camilla.png"
                alt="Camilla"
              />
            </div>
          </div>
        </div>
      </div>      </div>      </div>      </div> 
 );
};

export default Gallery;
