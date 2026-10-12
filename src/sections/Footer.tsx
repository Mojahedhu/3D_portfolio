import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="flex flex-col items-center justify-center md:items-start">
          <p>Visit my blog</p>
        </div>
        <div className="socials">
          {socialImgs.map(({ name, imgPath }) => (
            <div key={`social-${name}`} className="icon">
              <img src={imgPath} alt={`imag-${name}`} />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Mojahed. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
