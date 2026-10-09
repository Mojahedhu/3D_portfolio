import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  // Track if the use has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Create an event listener for when the user scrolls
    const handleScroll = () => {
      // Check if the use has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Mojahed JSB
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
