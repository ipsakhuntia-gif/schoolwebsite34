
import React, { useEffect, useState, useRef } from "react";

// Sample school images - replace with your actual school images
const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop", // Classroom
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop", // Students studying
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop", // School building
];

const imageDescriptions = [
  "ଆଧୁନିକ ଶିକ୍ଷା ବ୍ୟବସ୍ଥା",
  "ଗୁଣବତ୍ତା ଶିକ୍ଷା",
  "ସୁନ୍ଦର ପରିବେଶ"
];

function ModernSchoolSlider() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) {
              setLeftVisible(true);
            }
            if (entry.target === rightRef.current) {
              setRightVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 600);
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#333333",
    padding: "80px 20px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    position: "relative",
    overflow: "hidden"
  };

  const backgroundPatternStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(200, 200, 200, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(150, 150, 150, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(180, 180, 180, 0.1) 0%, transparent 50%)
    `,
    zIndex: 1
  };

  const homeContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "60px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2
  };

  const homeLeftStyle = {
    flex: 1,
    minWidth: "350px",
    // background:"red",
    opacity: leftVisible ? 1 : 0,
    transform: leftVisible ? "translateY(0)" : "translateY(50px)",
    transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const homeRightStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    minWidth: "400px",
    opacity: rightVisible ? 1 : 0,
    transform: rightVisible ? "translateY(0)" : "translateY(50px)",
    transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const sliderContainerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    height: "400px",
    perspective: "1000px"
  };

  const sliderStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: `
      0 25px 50px rgba(0,0,0,0.15),
      0 0 0 1px rgba(0,0,0,0.1),
      inset 0 1px 0 rgba(255,255,255,0.8)
    `,
    background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
    border: "1px solid #e5e7eb"
  };

  const slideStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const getSlideTransform = (index) => {
    const diff = index - currentIndex;
    const isActive = index === currentIndex;

    if (isTransitioning) {
      if (isActive) {
        return direction === 'next'
          ? { transform: "translateX(-100%) rotateY(-15deg)", opacity: 0, zIndex: 1 }
          : { transform: "translateX(100%) rotateY(15deg)", opacity: 0, zIndex: 1 };
      } else if ((direction === 'next' && diff === 1) || (direction === 'prev' && diff === -1) ||
        (direction === 'next' && diff === -2) || (direction === 'prev' && diff === 2)) {
        return { transform: "translateX(0) rotateY(0deg) scale(1)", opacity: 1, zIndex: 3 };
      }
    }

    if (diff === 0) {
      return { transform: "translateX(0) rotateY(0deg) scale(1)", opacity: 1, zIndex: 3 };
    } else if (diff === 1 || diff === -2) {
      return { transform: "translateX(100%) rotateY(25deg) scale(0.8)", opacity: 0, zIndex: 1 };
    } else {
      return { transform: "translateX(-100%) rotateY(-25deg) scale(0.8)", opacity: 0, zIndex: 1 };
    }
  };

  const overlayStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
    padding: "30px",
    zIndex: 5
  };

  const controlsStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(0,0,0,0.1)",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "20px",
    color: "#333333"
  };

  const keyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-10px) rotate(1deg); }
      66% { transform: translateY(5px) rotate(-1deg); }
    }
    
    @keyframes glow {
      0%, 100% { box-shadow: 0 25px 50px rgba(0,0,0,0.15), 0 0 30px rgba(251, 191, 36, 0.2); }
      50% { box-shadow: 0 25px 50px rgba(0,0,0,0.15), 0 0 50px rgba(245, 158, 11, 0.3); }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    .floating { animation: float 6s ease-in-out infinite; }
    .glowing { animation: glow 3s ease-in-out infinite; }
    
    .shimmer-text {
      background: linear-gradient(
        90deg,
        rgba(0,0,0,0.8) 0%,
        rgba(0,0,0,1) 20%,
        rgba(0,0,0,0.8) 40%,
        rgba(0,0,0,0.8) 100%
      );
      background-size: 200% auto;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      animation: shimmer 3s linear infinite;
    }
  `;

  return (
    <div style={containerStyle}>
      <div style={backgroundPatternStyle}></div>
      <style>{keyframes}</style>

      <div style={homeContainerStyle}>
        {/* Left Content */}
        <div ref={leftRef} style={homeLeftStyle}>
          <h1 className="shimmer-text" style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            marginBottom: "1rem",
            fontWeight: "800",
            lineHeight: "1.2",
            textShadow: "0 4px 20px rgba(0,0,0,0.1)",
            color: "#1a1a1a"
          }}>
           ସ୍ୱରସ୍ୱତୀ ଶିକ୍ଷା ମନ୍ଦିର
          </h1>

          <h3 style={{
            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            marginBottom: "2.5rem",
            opacity: 0.8,
            fontWeight: "400",
            color: "#666666"
          }}>
            ନହରକଣ୍ଟା, ଭୁବନେଶ୍ୱର
          </h3>

          <div style={{
            background: "rgba(0,0,0,0.02)",
            border: "2px solid #e5e7eb",
            padding: "30px",
            borderRadius: "20px",
            // boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "700"
            }}>
              ସଂସ୍ଥା ବିଷୟରେ
            </h2>

            <p style={{
              marginBottom: "1.5rem",
              lineHeight: "1.8",
              fontSize: "1.1rem",
              color: "#4a4a4a"
            }}>
              1 ଏପ୍ରିଲ୍ 2017 ରେ ପ୍ରତିଷ୍ଠିତ ହୋଇଥିବା ଏହି ସ୍କୁଲ୍,
              <strong style={{
                background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>  ସ୍ୱରସ୍ୱତୀ ଶିକ୍ଷା ମନ୍ଦିର</strong> ଦ୍ୱାରା ପରିଚାଳିତ।   <p style={{
                marginBottom: "1.5rem",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                color: "#4a4a4a"
              }}>
                 ସ୍ୱରସ୍ୱତୀ ଶିକ୍ଷା ମନ୍ଦିର ସ୍କୁଲ୍ 1 ଏପ୍ରିଲ୍ 2017 ରେ ପ୍ରତିଷ୍ଠିତ
                ହୋଇ, ଶ୍ରୀ ଜୟଦେବ ଶିକ୍ଷା କେନ୍ଦ୍ର ଟ୍ରଷ୍ଟ ଦ୍ୱାରା ପରିଚାଳିତ
                ହେଉଛି। ସ୍ଥାପନା ସମୟରେ କେବଳ 30 ଛାତ୍ରଛାତ୍ରୀ ଏବଂ
                4 ଜଣ ଶିକ୍ଷକ ସହିତ ଯାତ୍ରା ଆରମ୍ଭ କରିଥିଲେ, ଆଜି
                ଏହା ଶତାଧିକ ଛାତ୍ରଛାତ୍ରୀଙ୍କର ଆଦର୍ଶ ସ୍ଥାନରେ
                ପରିଣତ ହୋଇଛି।

                “ମୁଁ କରିପାରେ” (I Can Do It) ଏହି ସ୍କୁଲ୍ର
                ପ୍ରାଧାନ୍ୟ ସ୍ଲୋଗାନ୍, ଯାହା ପ୍ରତ୍ୟେକ
                ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ଆତ୍ମବିଶ୍ୱାସ, ସ୍ୱାଧୀନତା
                ଏବଂ ସ୍ୃଜନଶୀଳତାରେ ପ୍ରେରିତ କରେ।

                ସ୍କୁଲ୍ କେବଳ ପାଠ୍ୟକ୍ରମିକ ଶିକ୍ଷାରେ ଗୁରୁତ୍ୱ
                ଦେଉନାହିଁ, ବରଞ୍ଚ କ୍ରୀଡ଼ା, ସାହିତ୍ୟ, ସଂସ୍କୃତି
                ଏବଂ ସହ-ପାଠ୍ୟକ୍ରମିକ କାର୍ଯ୍ୟକଳାପକୁ ସମାନ
                ଗୁରୁତ୍ୱ ଦେଇଥାଏ। ଏଠାରେ ପ୍ରତ୍ୟେକ
                ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ସମଗ୍ରିକ ଉନ୍ନତି ପାଇଁ
                ପ୍ରେରିତ କରାଯାଏ, ଯେଣ୍ତାକି ସେମାନେ
                ଆଗାମୀକାଲିର ସଚେତନ, ସଚ୍ଚରିତ୍ର ଓ
                ସାମାଜିକ ଦାୟିତ୍ୱପରାୟଣ ନାଗରିକ
                ହୋଇପାରନ୍ତି।

                SJIS ନୀତି, ନୀତିଶାସ୍ତ୍ର ଏବଂ ସଦ୍ଗୁଣକୁ
                ପ୍ରାଧାନ୍ୟ ଦେଇ, ପ୍ରତ୍ୟେକ ଛାତ୍ରର
                ମନୋବଳକୁ ଉନ୍ନତ କରୁଛି।
                ଏହାର ପ୍ରଧାନ ଲକ୍ଷ୍ୟ — ଶିକ୍ଷା
                ସହିତ ସତ୍ୟ, ନ୍ୟାୟ ଓ ମାନବିକ
                ମୂଲ୍ୟକୁ ସ୍ଥାପିତ କରିବା।
                ଏହି ପ୍ରତିଶ୍ରୁତି ସହିତ,
                SJIS ଭବିଷ୍ୟତରେ
                ନୂଆ ପିଢ଼ୀକୁ ସାଜାଇ
                ଦେଉଛି।
              </p>

            </p>

          </div>
        </div>

        {/* Right Image Slider */}
        <div ref={rightRef} style={homeRightStyle}>
          <div style={sliderContainerStyle} className="floating">
            <div style={sliderStyle} className="glowing">
              {images.map((img, index) => (
                <div key={index} style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  ...getSlideTransform(index)
                }}>
                  <img
                    src={img}
                    alt={`School Image ${index + 1}`}
                    style={slideStyle}
                    loading="lazy"
                  />
                  <div style={overlayStyle}>
                    <h3 style={{
                      fontSize: "1.4rem",
                      fontWeight: "600",
                      margin: 0,
                      textShadow: "0 2px 10px rgba(0,0,0,0.7)",
                      color:"white"
                    }}>
                      {imageDescriptions[index]}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div
              style={{ ...controlsStyle, left: "-25px" }}
              onClick={prevSlide}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(0,0,0,0.2)";
                e.target.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(0,0,0,0.1)";
                e.target.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              ‹
            </div>

            <div
              style={{ ...controlsStyle, right: "-25px" }}
              onClick={nextSlide}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(0,0,0,0.2)";
                e.target.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(0,0,0,0.1)";
                e.target.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              ›
            </div>
          </div>

          {/* Progress indicators */}
          <div style={{
            position: "absolute",
            bottom: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "12px",
            zIndex: 10
          }}>
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: index === currentIndex ? "40px" : "12px",
                  height: "12px",
                  borderRadius: "6px",
                  background: index === currentIndex
                    ? "linear-gradient(135deg, #fbbf24, #f59e0b)"
                    : "rgba(0,0,0,0.3)",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  boxShadow: index === currentIndex
                    ? "0 4px 15px rgba(251, 191, 36, 0.4)"
                    : "none",
                  backdropFilter: "blur(10px)"
                }}
                onMouseEnter={(e) => {
                  if (index !== currentIndex) {
                    e.target.style.background = "rgba(0,0,0,0.5)";
                    e.target.style.transform = "scale(1.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentIndex) {
                    e.target.style.background = "rgba(0,0,0,0.3)";
                    e.target.style.transform = "scale(1)";
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModernSchoolSlider;