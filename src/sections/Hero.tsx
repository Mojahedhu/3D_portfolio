import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { words } from "../constants";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        opacity: 0,
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      },
    );
  }, []);
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`word-${index}`}
                        className="flex items-center gap-1 pb-2 md:gap-3"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into real project</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 pointer-events-none relative z-10 md:text-xl">
              Hi, I’m Mojahed, a developer based in Middle-East with a passion
              for code.
            </p>

            <Button
              text="See My Work"
              className="h-16 w-60 md:h-16 md:w-80"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Module or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
