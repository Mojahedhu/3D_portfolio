import Hero from "./sections/Hero";
import AppShowCase from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowCase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
    </>
  );
};

export default App;
