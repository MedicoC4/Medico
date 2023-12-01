import AOS from 'aos';
import { gsap } from 'gsap';
import Atropos from 'atropos/react';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

import './landingPage.css';
import 'atropos/css';
import 'aos/dist/aos.css';

// import doctorSVG from "../../../public/assets/doctorSvg.svg";
import bbb from '../../../public/assets/woman.svg';
import wave from '../../../public/assets/wave.svg';
import aaa from '../../../public/assets/dashboard.svg';
import features from '../../../public/assets/Progress.svg';
import dashboad from '../../../public/assets/Dashboardaaaaaa.png';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const LandingPage = () => {
  const navigate = useNavigate();
  const main = useRef();
  const smoother = useRef();
  const wordRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Operations', 'Efficiency', 'Workflow'];

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 0.8,
      effects: true,
      smoothTouch: 0.1,
    });
    // ScrollTrigger.create({
    //   trigger: '.box-c',
    //   pin: true,
    //   start: 'center center',
    //   end: '+=300',
    //   markers: true,
    // });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          scale: 1.3,
          duration: 0.5,
          scrollTrigger: {
            trigger: box,
            start: '30',
            end: 'bottom',
            scrub: 2,
          },
        });
      });
    }, main);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    const changeWord = () => {
      tl.to(wordRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: 'power1.out',
        onComplete: () => {
          setWordIndex((wordIndexx) => (wordIndexx + 1) % words.length);
          tl.to(wordRef.current, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'power1.out',
          });
        },
      });
    };

    const interval = setInterval(changeWord, 3000);
    clearInterval(interval);
  }, [words.length]);

  return (
    <div>
      {' '}
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
                    {/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */}
                    <li
                      className="navLink"
                      onClick={() => {
                        navigate('/login');
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          navigate('/login');
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      Login
                    </li>
                    {/* eslint-enable jsx-a11y/no-noninteractive-element-to-interactive-role */}
                  </ul>
                </nav>
                <div>
                  <h1 id="logo">MediCo</h1>
                </div>
              </div>
              <div className="text_container">
                <div className="landing_text_anim">
                  <img src={bbb} alt="" />

                  <h1 style={{margin:'0'}}>Experience Pharmacy Innovation</h1>

                  <h1 style={{margin:'0'}}>
                    Enhancing{' '}
                    <span ref={wordRef} className="spannn animate__animated animate__fadeInDown">
                      {words[wordIndex]}
                    </span>
                  </h1>
                  <h1 style={{margin:'0'}}>Your Pharmacy Dashboard Solution</h1>

                  <img id="aaa" src={aaa} alt="" />
                  <button className="get-started" type="button">
                    Get Started
                  </button>
                </div>
              </div>
            </section>
            <section className="section-2" ref={main}>
              <Atropos
                className="my-atropos box"
                rotateXMax={4}
                rotateYMax={4}
                shadow={false}
                activeOffset={0}
                shadowScale={0}
                highlight={false}
                alwaysActive
                onEnter={() => console.log('Enter')}
                onLeave={() => console.log('Leave')}
              >
                {' '}
                <div
                  style={{
                    backgroundColor: '#706bf997',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '3rem',
                    transition: '0.3s',
                  }}
                  className="dashbaord-bg"
                >
                  <div className="dashboard_anim" data-atropos-offset="1">
                    <img src={dashboad} alt="" />
                  </div>
                </div>
              </Atropos>
            </section>
            <section className="section3">
              <div
                data-aos-delay="300"
                className="desc_landing"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h1>How We Serve Pharmacies</h1>
                <p>
                  We want to transform the way you do business. Digital Pharmacist’s comprehensive
                  digital engagement platform combines cloud-based communication and adherence
                  solutions with expert digital marketing and reputation management, built to help
                  you succeed in a digital world.
                </p>
              </div>
              <div className="intru">
                <div className="instru_desc" data-aos="fade-right">
                  <h1>The Pharmacy Experience Dashboard</h1>
                  <p>
                    We’ve created a portal that connects our entire suite of digital solutions so
                    you can manage your pharmacy all in one place. Digital Pharmacist’s dashboard
                    lets you customize website settings like delivery options and store hours. You
                    can view the website, mobile app, and digital marketing reports, track patient
                    call volume, and take care of incoming patient SMS and voice messages.
                  </p>
                </div>
                <img
                  src="https://www.digitalpharmacist.com//wp-content/uploads/2020/05/pharmacy-experience-ashboard.svg"
                  alt="aa"
                  data-aos="fade-left"
                  data-aos-delay="200"
                />
              </div>
            </section>
            <section className="section4">
              <img data-aos="fade-right" data-aos-delay="100" src={features} alt="" />
              <div>
                <h1 data-aos="zoom-in" data-aos-delay="200">
                  Why should choose MediCo
                </h1>
                <ul>
                  <li data-aos="zoom-in" data-aos-delay="300">
                    Comprehensive suite of digital solutions
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="400">
                    Customizable dashboards for easy accessibility
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="500">
                    Strategic planning and implementation support
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="600">
                    Personalized customer service
                  </li>
                </ul>
              </div>
            </section>
            <section className="last_section">
              <img src={wave} alt="" />
              <div />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
