import Moon from "../assets/Moon";
import Sun from "../assets/Sun";
import { useDarkMode } from "../context/DarkContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleToggleClick = () => {
    toggleDarkMode();
  };
  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20  ">
      {/* Logo */}
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-52 mx-auto md:mx-0 md:absolute top-10 left-10" />
      {/* Menu */}
      <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
        <a href="#features" className="hover:text-accentCyan">
          Features
        </a>
        <a href="#testimonial" className="hover:text-accentCyan">
          Testimonial
        </a>

        {/*Dark/light button */}
        <button
          type="button"
          onClick={handleToggleClick}
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2  "
        >
          {darkMode ? <Moon /> : <Sun />}
        </button>
      </div>
    </header>
  );
};
export default Header;
