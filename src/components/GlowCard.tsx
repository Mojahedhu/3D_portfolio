import { useRef } from "react";

interface GlowCardProps {
  card: {
    review: string;
    imgPath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
  };
  children: React.ReactNode;
  index: number;
}

const GlowCard = ({ card, children, index }: GlowCardProps) => {
  //   refs for all the cards
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  //   When mouse moves over a card, rotate the glow effect
  const handleTheMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      // get the current card
      const card = cardRefs.current[index];
      if (!card) return;

      // get the mouse position relative to the card
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      //calculate the angle from the center of the card to the mouse
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      // adjust the angle so that's it's between 0 and 360
      angle = (angle + 360) % 360;

      // set the angle as a CSS variable
      card.style.setProperty("--start", `${angle + 60}`);
    };
  return (
    <div
      className="card card-border timeline-card mb-5 break-inside-avoid-column rounded-xl p-10"
      ref={(el) => {
        if (el) cardRefs.current[index] = el;
      }}
      onMouseMove={(e) => handleTheMouseMove(index)(e)}
    >
      <div className="glow" />
      <div className="mb-5 flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={`img-${i}`} src="/images/star.png" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
