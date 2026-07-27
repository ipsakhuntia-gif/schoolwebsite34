import React, { useEffect } from "react";
import "./PradhanaAcharya.css";
import AOS from "aos";
import "aos/dist/aos.css";
import principalImage from "../assets/image/principal.jpg"; // 🖼️ replace with your image

const PradhanaAcharya = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <section className="pradhanaacharya-section" id="principal">
      <div className="pradhanaacharya-container">
        {/* Image Section */}
        <div
          className="pradhanaacharya-image"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img src={principalImage} alt="Principal" />
        </div>

        {/* Content Section */}
        <div
          className="pradhanaacharya-content"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="pradhanaacharya-title">ପ୍ରଧାନାଚାର୍ଯ୍ୟଙ୍କ ବାଣୀ</h2>
          <h3 className="principal-name">ଶ୍ରୀମତୀ ଜୟଶ୍ରୀ ମହାପାତ୍ର</h3>
          <p className="principal-role">ପ୍ରଧାନାଚାର୍ଯ୍ୟ, ସରସ୍ୱତୀ ଶିକ୍ଷା ମନ୍ଦିର</p>

          <p className="pradhanaacharya-message">
            “ଶିକ୍ଷା ହେଉଛି ମଣିଷ ଜୀବନର ମୂଳ ଆଧାର। ଆମ ସ୍କୁଲରେ ଆମେ ଶିକ୍ଷାକୁ
            ନିଜ ଜୀବନ ସହିତ ଏକତ୍ର କରି ଅଭିନବ ଦିଗରେ ଯାଇପାରିବା ପାଇଁ ଉତ୍ସାହିତ
            କରୁଛୁ। ଆମ ଛାତ୍ରଛାତ୍ରୀମାନେ ଶିକ୍ଷା ସହିତ ନୈତିକ ଓ ସାମାଜିକ ମୂଲ୍ୟ
            ଗଢି ଉଠନ୍ତୁ ଏହା ଆମର ଲକ୍ଷ।”
          </p>

          <div className="signature" data-aos="zoom-in" data-aos-delay="300">
            <p>- ଶ୍ରୀମତୀ ଜୟଶ୍ରୀ ମହାପାତ୍ର</p>
            <span>ପ୍ରଧାନାଚାର୍ଯ୍ୟ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PradhanaAcharya;
