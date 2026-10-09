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
            <LogoIcon key={index} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
