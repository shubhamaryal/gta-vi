import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 18,
      duration: 2,
      transformOrigin: "50% 50%",
      ease: "power4.easeInOut",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 1.2,
      x: "-50%",
      bottom: "-45%",
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.1,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing w-full h-screen bg-black overflow-hidden relative">
            <div className="navbar absolute z-[10] top-0 left-0 w-full py-8 px-10">
              <div className="logo flex gap-6">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl text-white -mt-[5px] leading-none">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white absolute top-15 left-1/2 -translate-x-1/2 flex flex-col gap-2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-9xl leading-none -ml-40">grand</h1>
                <h1 className="text-9xl leading-none ml-20">theft</h1>
                <h1 className="text-9xl leading-none -ml-40">auto</h1>
              </div>
              <img
                className="character absolute -bottom-[250%] left-1/2 -translate-x-1/2  scale-[4] rotate-[-30deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              {/* "bg-gradient-to-t from-black to-transparent" this makes a dark gradient on the bottom */}
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica]">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-15"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr w-full flex text-white h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Still running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  adipisci molestiae voluptas nam veniam ipsum, a qui
                  consequatur earum similique, natus et culpa?
                </p>
                <p className="mt-3 text-xl font-[Helvetica]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque vitae facere nisi! Cum harum consectetur inventore dolor
                  voluptates!
                </p>
                <p className="mt-10 text-xl font-[Helvetica]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum quas ex beatae facilis recusandae eaque necessitatibus
                  aliquam facere soluta et!
                </p>
                <button className="bg-yellow-500 px-10 py-10 text-4xl text-black mt-10">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
