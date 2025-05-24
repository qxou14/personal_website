import React, { useEffect } from "react";

export default function BackgroundEffect() {
  useEffect(() => {
    const container = document.querySelector(".stars");
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }
  }, []);
  return (
    <div className="night-sky">
      <div className="stars"></div>
      <div className="meteor"></div>
      <div className="meteor star1"></div>
      <div className="meteor star2"></div>
      <div className="meteor star3"></div>
    </div>
  );
}
