import Hero from "./sections/Hero";
import AppShowCase from "./components/ShowcaseSection";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowCase />
    </>
  );
};

export default App;
