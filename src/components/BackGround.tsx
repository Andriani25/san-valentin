import videoBG from "../assets/background.mp4";
import image from "../assets/WhatsApp Image 2024-02-14 at 11.48.03.jpeg";
import { useState } from "react";

const BackGround = function () {
  const [sound, setSound] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const deltaX = e.clientX - (boundingBox.left + boundingBox.width * 50);
    const deltaY = e.clientY - (boundingBox.top + boundingBox.height * 50);

    setPosition({ x: deltaX, y: deltaY });
  };

  return (
    <div className="background">
      <div className="overlay"></div>
      <video src={videoBG} muted={sound} loop autoPlay />
      <div className="content">
        {sound ? (
          <div>
            <h1>A la mierda Romeo y Julieta</h1>
            <h2>¿Querés ser mi pareja al estilo Ghibli?</h2>
          </div>
        ) : (
          <h2>Te espero en los naranjos a las 20:30 💕</h2>
        )}
        <div style={{ flexDirection: "row" }}>
          <button onClick={() => setSound(false)}>Si</button>
          <button
            onMouseMove={handleMouseMove}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.3s ease",
            }}
            className="moving-button"
          >
            No
          </button>
        </div>
        {sound ? (
          ""
        ) : (
          <div>
            <img
              src={image}
              alt="💋🌹"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BackGround;
