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
              <p>My artistic journey began unexpectedly in a waiting room in 2007.
Bored and restless, I passed the time with an old receipt and a ballpoint pen.
By the time the doctor finally arrived, I no longer just had a receipt in my hand – I had a piece of art filled with patterns and shapes. That receipt became my ticket to a vibrant new world.
Since then, painting has become my great passion, a space for creative expression, and a source of energy and peace.
My subjects often revolve around strong, determined women, which I combine with abstract works and inspiration drawn from the power of animals – especially elephants and lions.
I have sold my artwork all over the world and exhibited in both Sweden and other parts of Europe.
During the pandemic, I ran an art gallery in Täby Centrum, showcasing and selling both my own paintings and works by other artists.
Welcome to my vibrant world!</p>
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
