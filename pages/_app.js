import { useState, useEffect } from "react";
import DefaultLayout from "../components/UI/Layout/DefaultLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.getElementsByTagName("body")[0];
    isDarkMode ? root.classList.add("dark") : root.classList.remove("dark");
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DefaultLayout>
      <Component
        onToggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        {...pageProps}
      />
    </DefaultLayout>
  );
}

export default MyApp;
