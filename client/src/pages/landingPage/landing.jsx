import "./landing.css";
import React, { useState, useEffect, useRef } from "react";
import doctorSVG from "../../assets/images/doctorSvg.svg";
import { gsap } from "gsap";
import aaa from "../../assets/images/dashboard.svg";
import bbb from "../../assets/images/woman.svg";

const Landing = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Operations", "Efficiency", "Workflow"];
  const wordRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const changeWord = () => {
      tl.to(wordRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
          setWordIndex((wordIndex) => (wordIndex + 1) % words.length);
          tl.to(wordRef.current, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power1.out",
          });
        },
      });
    };

    const interval = setInterval(changeWord, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="landing_container">
      <section className="section-1">
        <div className="top-nav">
          <nav>
            <ul>
              <li>Dashboard</li>
              <li>Inventory</li>
              <li>Contact</li>
              <li>Get Started</li>
            </ul>
          </nav>
          <div>
            <h1 id="logo">MediCo</h1>
          </div>
        </div>
        <div className="text_container">
          <div className="landing_text_anim">
            <img src={bbb} alt="" />
            <h1>Experience Pharmacy Innovation</h1>

            <h1>
              Enhancing{" "}
              <span
                ref={wordRef}
                className={`spannn animate__animated animate__fadeInDown`}
              >
                {words[wordIndex]}
              </span>
            </h1>
            <h1>Your Pharmacy Dashboard Solution</h1>

            <img id="aaa" src={aaa} alt="" />
            <button className="get-started">Get Started</button>
          </div>
        </div>
      </section>
      <section className="section-2">
        {/* Add content for section 2 here */}
      </section>
    </div>
  );
};

export default Landing;
