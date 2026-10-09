import CountUpComponent, { type CountUpProps } from "react-countup";
import { counterItems } from "../constants";
import type { FC } from "react";

// Resolves runtime object wrapper from Vite CJS bundling
const CountUp =
  (CountUpComponent as unknown as { default: FC<CountUpProps> }).default ||
  CountUpComponent;

export default function AnimatedCounter() {
  return (
    <div id="counter" className="padding-x-lg mt-32 xl:mt-0">
      <div className="grid-4-cols mx-auto">
        {counterItems.map((item, idx) => (
          <div
            key={`counter-${idx}`}
            className="flex flex-col justify-center rounded-lg bg-zinc-900 p-10"
          >
            <div className="counter-number text-white-50 mb-2 text-5xl font-bold">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-lg text-white">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
