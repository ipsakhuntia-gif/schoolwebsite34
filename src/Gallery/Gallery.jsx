

// import React, { useEffect, useRef, useState, useCallback } from "react";
// import galleryImages from "./GalleryData";
// import "./Gallery.css";

// const Gallery = () => {
//   const ref = useRef(null);
//   const touchX = useRef(null);
//   const [active, setActive] = useState(null); // index of open photo
//   const [dir, setDir] = useState(1); // 1 = next, -1 = previous

//   const total = galleryImages.length;

//   // Reveal each photo once when it scrolls into view
//   useEffect(() => {
//     const items = ref.current?.querySelectorAll(".shot");
//     if (!items) return;
//     const io = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             e.target.classList.add("is-in");
//             io.unobserve(e.target);
//           }
//         }),
//       { threshold: 0.1 }
//     );
//     items.forEach((el) => io.observe(el));
//     return () => io.disconnect();
//   }, []);

//   const close = useCallback(() => setActive(null), []);
//   const step = useCallback(
//     (d) => {
//       setDir(d);
//       setActive((i) => (i === null ? i : (i + d + total) % total));
//     },
//     [total]
//   );

//   // Keyboard controls + lock page scroll while viewer is open
//   useEffect(() => {
//     if (active === null) return;
//     const onKey = (e) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowRight") step(1);
//       if (e.key === "ArrowLeft") step(-1);
//     };
//     document.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [active, close, step]);

//   // Swipe support for mobile
//   const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
//   const onTouchEnd = (e) => {
//     if (touchX.current === null) return;
//     const diff = e.changedTouches[0].clientX - touchX.current;
//     if (Math.abs(diff) > 50) step(diff < 0 ? 1 : -1);
//     touchX.current = null;
//   };

//   const current = active !== null ? galleryImages[active] : null;

//   return (
//     <section className="gallery">
//       <header className="gallery__head">
//         <h2>School Gallery</h2>
//         <p>Moments that make learning joyful and memorable.</p>
//       </header>

//       <div className="gallery__wall" ref={ref}>
//         {galleryImages.map((item, i) => (
//           <figure
//             key={item.id}
//             className="shot"
//             onClick={() => {
//               setDir(1);
//               setActive(i);
//             }}
//           >
//             <div className="shot__img">
//               <img src={item.src} alt={item.title} loading="lazy" />
//             </div>
//             <figcaption>{item.title}</figcaption>
//           </figure>
//         ))}
//       </div>

//       {current && (
//         <div
//           className="viewer"
//           role="dialog"
//           aria-modal="true"
//           aria-label={current.title}
//           onClick={close}
//           onTouchStart={onTouchStart}
//           onTouchEnd={onTouchEnd}
//         >
//           <button className="viewer__btn viewer__close" onClick={close} aria-label="Close">
//             ✕
//           </button>
//           <button
//             className="viewer__btn viewer__prev"
//             onClick={(e) => { e.stopPropagation(); step(-1); }}
//             aria-label="Previous photo"
//           >
//             ‹
//           </button>

//           <figure
//             key={current.id}
//             className={`viewer__fig ${dir === 1 ? "from-right" : "from-left"}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img src={current.src} alt={current.title} />
//             <figcaption>
//               {current.title}
//               <small>{active + 1} / {total}</small>
//             </figcaption>
//           </figure>

//           <button
//             className="viewer__btn viewer__next"
//             onClick={(e) => { e.stopPropagation(); step(1); }}
//             aria-label="Next photo"
//           >
//             ›
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;























import React, { useEffect, useRef, useState, useCallback } from "react";
import galleryImages from "./GalleryData";
import "./Gallery.css";

const Gallery = () => {
  const ref = useRef(null);
  const touchX = useRef(null);
  const [active, setActive] = useState(null); // index of open photo
  const [dir, setDir] = useState(1); // 1 = next, -1 = previous

  const total = galleryImages.length;

  // Reveal each photo once when it scrolls into view
  useEffect(() => {
    const items = ref.current?.querySelectorAll(".shot");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d) => {
      setDir(d);
      setActive((i) => (i === null ? i : (i + d + total) % total));
    },
    [total]
  );

  // Keyboard controls + lock page scroll while viewer is open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  // Swipe support for mobile
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(diff) > 50) step(diff < 0 ? 1 : -1);
    touchX.current = null;
  };

  const current = active !== null ? galleryImages[active] : null;

  return (
    <section className="gallery">
      <header className="gallery__head">
        <h2>Moments that make learning joyful and memorable.</h2>
      </header>

      <div className="gallery__wall" ref={ref}>
        {galleryImages.map((item, i) => (
          <figure
            key={item.id}
            className="shot"
            onClick={() => {
              setDir(1);
              setActive(i);
            }}
          >
            <div className="shot__img">
              <img src={item.src} alt={item.title} loading="lazy" />
            </div>
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>

      {current && (
        <div
          className="viewer"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="viewer__btn viewer__close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            className="viewer__btn viewer__prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <figure
            key={current.id}
            className={`viewer__fig ${dir === 1 ? "from-right" : "from-left"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={current.src} alt={current.title} />
            <figcaption>
              {current.title}
              <small>{active + 1} / {total}</small>
            </figcaption>
          </figure>

          <button
            className="viewer__btn viewer__next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;