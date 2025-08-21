import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Update stars and meteors on mount and resize
  useEffect(() => {
    const generate = () => {
      generateStars();
      generateMeteors();
    };

    // Initial generate
    generate();

    // Add resize event listener
    window.addEventListener("resize", generate);

    return () => window.removeEventListener("resize", generate);
  }, []);

  const generateStars = () => {
    const screenArea = window.innerWidth * window.innerHeight;
    const densityScalar = window.innerWidth < 640 ? 12000 : 8000;
    const numberOfStars = Math.floor(screenArea / densityScalar);

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const count = window.innerWidth < 640 ? 2 : 4; // fewer meteors on small screens
    const newMeteors = [];
    for (let i = 0; i < count; i++) {
      newMeteors.push({
        id: i,
        x: Math.random() * 90 + 5, // Avoid edges (5% to 95%)
        y: Math.random() * 80 + 5, // Avoid edges vertically too
        duration: Math.random() * 6 + 6,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: "150px",
            height: "2px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDuration: meteor.duration + "s",
          }}
        />
      ))}
    </div>
  );
};
