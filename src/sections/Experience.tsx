import { useGSAP } from "@gsap/react";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // loop through each timeline card and animate them in
    // as the use scroll to each card

    gsap.utils.toArray<Element>(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the lift side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline hight as the use scrolls
    // from the top of the timeline to 70% down the screen
    // the timeline should scale from 1 to 0
    // as the user scroll up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      // ease: "power1.inout",
      // Trigger the animation when the timeline is at the top of the screen
      // ane end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scroll up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the use scroll to each text element
    gsap.utils.toArray<Element>(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // over one second
      // with a power2 ease-in-out curve
      // ease-in-out curve
      gsap.from(text, {
        // Animate the text opacity from 0 to 1
        opacity: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power1.inOut",
        // Trigger the animation when the text is 60% of the way down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);
  return (
    <section
      id="experience"
      className="flex-center section-padding mt-20 md:mt-40 xl:p-0"
    >
      <div className="h-full w-full px-5 md:px-20">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="relative mt-32">
          <div className="relative z-50 space-y-10 xl:space-y-32">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div className="">
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line h-full w-1" />
                    </div>

                    <div className="expText flex gap-5 md:gap-10 xl:gap-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>

                      <div>
                        <h1 className="text-3xl font-semibold">{card.title}</h1>
                        <p className="text-white-50 my-5">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-blue-50 italic">Responsibilities</p>

                        <ul className="text-white-50 ms-5 mt-5 flex list-disc flex-col gap-5">
                          {card.responsibilities.map((res, idx) => (
                            <li key={`res-${idx}`} className="text-lg">
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
