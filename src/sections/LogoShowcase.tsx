import LogoIcon from "../components/LogoIcon";
import { logoIconsList } from "../constants";

const LogoShowcase = () => {
  return (
    <section id="logo-showcase" className="relative my-10 md:my-20">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box gap-5 md:gap-12">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`logo-${index}`} icon={icon} index={index} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon
              key={`logo-${index + logoIconsList.length}`}
              icon={icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
