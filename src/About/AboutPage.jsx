import React from "react";
import "./AboutPage.css";
import bgImage from "../assets/image/jaga.jpg"; // replace with your image

const AboutPage = () => {
  return (
    <div className="about-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay1">
        <div className="content">
           <div className="cap-animation">🎓</div>
          <h1>ସରସ୍ୱତୀ ଶିକ୍ଷା ମନ୍ଦିର</h1>
          <p style={{color:"white"}}>ସଭିଏଁ ପଢ଼ନ୍ତୁ, ସଭିଏଁ ବଢ଼ନ୍ତୁ</p>
          {/* <div className="cap-animation">🎓</div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
