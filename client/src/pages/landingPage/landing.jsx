import "./landing.css";
import "atropos/css";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import doctorSVG from "../../assets/images/doctorSvg.svg";
import { gsap } from "gsap";
import aaa from "../../assets/images/dashboard.svg";
import bbb from "../../assets/images/woman.svg";
// import gsap from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Atropos from "atropos/react";

gsap.registerPlugin(ScrollTrigger);
const Landing = () => {
  const location = useLocation();

  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Operations", "Efficiency", "Workflow"];
  const wordRef = useRef(null);
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          scale: 1.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: box,
            start: 'top center',
            end: 'bottom center',
            scrub: 2, // Set scrub to match the smoothness
          },
        });
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  
  


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const smoother = ScrollSmoother.create({
        smooth: 0.8,
        effects: true,
        smoothTouch: 0.1,
      });
    });
    return () => ctx.revert();
  }, [location]);

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
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="landing_container">
          <section className="section-1">
            <div className="top-nav">
              <nav>
                <ul>
                  <li>Dashboard</li>
                  <li>Inventory</li>
                  <li>Contact</li>
                  <li>
                    <Link className="link" to="/dashboard">
                      Get Started
                    </Link>
                  </li>
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
          <section className="section-2" ref={main}>
            <Atropos
              className="my-atropos box"
              rotateXMax={5}
              rotateYMax={5}
              shadow={false}
              activeOffset={0}
              shadowScale={0}
              highlight={false}
              alwaysActive={false}
              onEnter={() => console.log("Enter")}
              onLeave={() => console.log("Leave")}
              onRotate={(x, y) => console.log("Rotate", x, y)}
            >
              {" "}
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(94,114,228,1) 15%, rgba(24,12,24,1) 72%)",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:'1.5rem'
                }}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    height: "200px",
                    width: "200px",
                  }}
                  data-atropos-offset="5" 
                ></div>
              </div>
            </Atropos>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
