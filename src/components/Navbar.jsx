import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuPaintbrush } from "react-icons/lu";
import ColorPicker from "./ThemePicker";

const Navbar = () => {
  const themes = [
    "light",
    "dark-purple",
    "dark",
    "dark-orange",
    "light-blue",
    "light-green",
  ];
  const navigate = useNavigate();
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const currentTheme = themes[themeIndex];
    document.documentElement.className = ""; // clear old classes
    document.documentElement.classList.add(currentTheme);
  }, [themeIndex]);

  const handleChangeTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <div>
      <div className="flex items-end justify-between mx-4 mb-4">
        <a href="/" className="font-semibold text-colorTheme text-xl">
          Rev.
        </a>
        <div className="flex h-8 gap-1 items-center">
          <button
            // onClick={handleChangeTheme}
            onClick={handleChangeTheme}
            className="h-full px-2 items-center text-colorTheme font-medium lg:text-base text-sm rounded-lg border-2 border-btnBorder shadow-md  shadow-primaryShadow"
          >
            <LuPaintbrush className="text-lg" />
          </button>
          <button
            className="h-full px-2 items-center text-colorTheme font-medium lg:text-base text-sm rounded-lg border-2 border-btnBorder shadow-md  shadow-primaryShadow"
            onClick={() => navigate("/guestbook")}
          >
            Guestbook 📖
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
