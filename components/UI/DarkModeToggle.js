import { BsSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

export default function DarkModeToggle({ onClickHandler, isDarkMode }) {
  return (
    <button
      className="absolute bottom-10 right-10 p-4 rounded-full	w-14 h-14 flex justify-center items-center border-2 border-black bg-white dark:bg-black  text-lg"
      onClick={onClickHandler}
    >
      {isDarkMode ? <BsSunFill /> : <BsMoonStarsFill />}
    </button>
  );
}
