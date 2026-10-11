import CountUpComponent, { type CountUpProps } from "react-countup";
import { counterItems } from "../constants";
import { type FC } from "react";

// Resolves runtime object wrapper from Vite CJS bundling
const CountUp =
  (CountUpComponent as unknown as { default: FC<CountUpProps> }).default ||
  CountUpComponent;

export default function AnimatedCounter() {
  // This is an alternative of the countup lib
  // this code has no effect, I put as reference
  // for future
  // const counterRef = useRef(null);
  // const countersRef = useRef([]);

  // useGSAP(() => {
  //   countersRef.current.forEach((counter, index) => {
  //     const numberElement = counter.querySelector(".counter-number");
  //     const item = counterItems[index];

  //     // Set initial value to 0
  //     gsap.set(numberElement, { innerText: "0" });

  //     // Create the counting animation
  //     gsap.to(numberElement, {
  //       innerText: item.value,
  //       duration: 2.5,
  //       ease: "power2.out",
  //       snap: { innerText: 1 }, // Ensures whole numbers
  //       scrollTrigger: {
  //         trigger: "#counter",
  //         start: "top center",
  //       },
  //       // Add the suffix after counting is complete
  //       onComplete: () => {
  //         numberElement.textContent = `${item.value}${item.suffix}`;
  //       },
  //     });
  //   }, counterRef);
  // }, []);

  return (
    <div
      id="counter"
      // ref={counterRef}
      className="padding-x-lg mt-32 xl:mt-0"
    >
      <div className="grid-4-cols mx-auto">
        {counterItems.map((item, idx) => (
          <div
            key={`counter-${idx}`}
            // ref={(el) => {
            //   if (el) countersRef.current[idx] = el;
            // }}
            className="flex flex-col justify-center rounded-lg bg-zinc-900 p-10"
          >
            <div className="counter-number text-white-50 mb-2 text-5xl font-bold">
              <CountUp end={item.value} suffix={item.suffix} enableScrollSpy />
            </div>
            <div className="text-lg text-white">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
