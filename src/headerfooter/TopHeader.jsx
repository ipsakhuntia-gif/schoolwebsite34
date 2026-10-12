import React from "react";
import "./TopBar.css";

const INSTAGRAM_URL = "https://www.instagram.com/ssmnkt_official/";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="contact-left">
        <span className="contact-in">📞 9938850767, 9090451990</span>
        <span className="contact-in">✉️ ssmnkt@gmail.com</span>
      </div>

      <div className="school-center">
        ସରସ୍ୱତୀ ଶିକ୍ଷା ମନ୍ଦିର, ନହରକଣ୍ଟା
      </div>

      <a
        className="topbar-social contact-in"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="SSMNKT on Instagram"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <defs>
            <radialGradient id="ig-grad" cx="0.3" cy="1.07" r="1.2">
              <stop offset="0" stopColor="#FEDA77" />
              <stop offset="0.25" stopColor="#F58529" />
              <stop offset="0.5" stopColor="#DD2A7B" />
              <stop offset="0.75" stopColor="#8134AF" />
              <stop offset="1" stopColor="#515BD4" />
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
          <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.8" />
          <circle cx="16.3" cy="7.7" r="1" fill="#fff" />
        </svg>
        <span>@ssmnkt_official</span>
      </a>
    </div>
  );
}