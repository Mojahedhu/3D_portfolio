import Hero from "./sections/Hero";
import AppShowCase from "./sections/ShowcaseSection";
import NavBar from "./sections/NavBar";
import LogoShowcase from "./sections/LogoShowcase";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowCase />
      <LogoShowcase />
    </>
  );
};

export default App;
