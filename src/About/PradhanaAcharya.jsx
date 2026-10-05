// import React, { useEffect } from "react";
// import "./PradhanaAcharya.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import principalImage from "../assets/image/principal.jpg"; // 🖼️ replace with your image

// const PradhanaAcharya = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       offset: 100,
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="pradhanaacharya-section" id="principal">
//       <div className="pradhanaacharya-container">
//         {/* Image Section */}
//         <div
//           className="pradhanaacharya-image"
//           data-aos="fade-right"
//           data-aos-delay="100"
//         >
//           <img src={principalImage} alt="Principal" />
//         </div>

//         {/* Content Section */}
//         <div
//           className="pradhanaacharya-content"
//           data-aos="fade-left"
//           data-aos-delay="200"
//         >
//           <h2 className="pradhanaacharya-title">ପ୍ରଧାନାଚାର୍ଯ୍ୟଙ୍କ ବାଣୀ</h2>
//           <h3 className="principal-name">ଶ୍ରୀମତୀ ଜୟଶ୍ରୀ ମହାପାତ୍ର</h3>
//           <p className="principal-role">ପ୍ରଧାନାଚାର୍ଯ୍ୟ, ସରସ୍ୱତୀ ଶିକ୍ଷା ମନ୍ଦିର</p>

//           <p className="pradhanaacharya-message">
//             “ଶିକ୍ଷା ହେଉଛି ମଣିଷ ଜୀବନର ମୂଳ ଆଧାର। ଆମ ସ୍କୁଲରେ ଆମେ ଶିକ୍ଷାକୁ
//             ନିଜ ଜୀବନ ସହିତ ଏକତ୍ର କରି ଅଭିନବ ଦିଗରେ ଯାଇପାରିବା ପାଇଁ ଉତ୍ସାହିତ
//             କରୁଛୁ। ଆମ ଛାତ୍ରଛାତ୍ରୀମାନେ ଶିକ୍ଷା ସହିତ ନୈତିକ ଓ ସାମାଜିକ ମୂଲ୍ୟ
//             ଗଢି ଉଠନ୍ତୁ ଏହା ଆମର ଲକ୍ଷ।”
//           </p>

//           <div className="signature" data-aos="zoom-in" data-aos-delay="300">
//             <p>- ଶ୍ରୀମତୀ ଜୟଶ୍ରୀ ମହାପାତ୍ର</p>
//             <span>ପ୍ରଧାନାଚାର୍ଯ୍ୟ</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PradhanaAcharya;



























import React, { useEffect, useRef, useState } from "react";
import "./PradhanaAcharya.css";
import principalImage from "../assets/image/principal.jpg";
import { principal, pillars } from "./pradhanaAcharyaData";

/* Section view me aate hi ek baar fire hota hai — entrance sequence drive karta hai. */
const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
};

const PradhanaAcharya = () => {
  const [sectionRef, inView] = useInView();

  return (
    <section
      className={`pa${inView ? " is-in" : ""}`}
      id="principal"
      ref={sectionRef}
      aria-labelledby="pa-title"
    >
      <span className="pa__glow pa__glow--a" aria-hidden="true" />
      <span className="pa__glow pa__glow--b" aria-hidden="true" />

      <div className="pa__inner">
        {/* ---------- Portrait ---------- */}
        <div className="pa__media" style={{ "--d": "0ms" }}>
          <span className="pa__frame" aria-hidden="true" />

          <figure className="pa__photo">
            <img src={principalImage} alt={principal.nameEn} />
            <span className="pa__duotone" aria-hidden="true" />
          </figure>

          <div className="pa__badge" style={{ "--d": "560ms" }}>
            <span className="pa__badgeValue">{principal.badge.value}</span>
            <span className="pa__badgeLabel">{principal.badge.label}</span>
          </div>

          <span className="pa__vRule" aria-hidden="true">
            {principal.school}
          </span>
        </div>

        {/* ---------- Message ---------- */}
        <div className="pa__body">
          <p className="pa__eyebrow" style={{ "--d": "120ms" }}>
            <span className="pa__rule" />
            {principal.eyebrow}
          </p>

          <h2 id="pa-title" className="pa__title" style={{ "--d": "200ms" }}>
            {principal.title}
          </h2>

          <span className="pa__quoteMark" aria-hidden="true">
            &ldquo;
          </span>

          <blockquote className="pa__pull" style={{ "--d": "300ms" }}>
            {principal.pullQuote}
          </blockquote>

          {principal.paragraphs.map((p, i) => (
            <p
              key={i}
              className="pa__text"
              style={{ "--d": `${380 + i * 90}ms` }}
            >
              {p}
            </p>
          ))}

          {/* ---------- Signature ---------- */}
          <div className="pa__sign" style={{ "--d": "700ms" }}>
            <svg
              className="pa__signSvg"
              viewBox="0 0 230 68"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M6 48C16 18 23 8 30 9c7 1 3 23-4 34-6 10-13 7-9-6C22 19 34 6 45 6c7 0 8 8 3 18-4 8-10 14-7 18 3 4 11 1 17-6 6-7 12-18 19-18 6 0 6 8 2 14-3 5-8 9-6 12 3 4 10 1 16-5 6-6 11-14 18-14 6 0 6 7 3 12-3 6-8 10-5 13 3 3 11 0 18-7 8-8 14-18 22-18 6 0 7 6 4 12-3 5-8 9-6 12 3 3 12 0 21-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="pa__signMeta">
              <p className="pa__signName">{principal.name}</p>
              <p className="pa__signRole">
                {principal.role} <span aria-hidden="true">&middot;</span>{" "}
                {principal.nameEn}
              </p>
            </div>
          </div>
        </div>

        {/* ---------- Pillars ---------- */}
        <ul className="pa__pillars">
          {pillars.map((p, i) => (
            <li
              key={p.id}
              className="pa__pillar"
              style={{ "--d": `${820 + i * 100}ms` }}
            >
              <span className="pa__pillarNum">{p.num}</span>
              <h3 className="pa__pillarLabel">
                {p.label}
                <span className="pa__pillarEn">{p.labelEn}</span>
              </h3>
              <p className="pa__pillarText">{p.text}</p>
              <span className="pa__pillarLine" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PradhanaAcharya;