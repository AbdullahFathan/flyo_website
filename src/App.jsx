import EarlyAccess from "./components/EarlyAccess";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
import Testimonial from "./components/Testimonial";
import { useDarkMode } from "./context/DarkContext";
import { useEffect } from "react";

const App = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Productive />
      <Testimonial />
      <EarlyAccess />
      <Footer />
    </main>
  );
};
export default App;
