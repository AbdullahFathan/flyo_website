import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
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
    </main>
  );
};
export default App;
