import { useState } from "react";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { ThemeContext } from "./context/ThemeContext";
import style from "./styles/common.module.scss";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isDark, setIsDark] = useState(true); /* 다크모드 */
  const [currentContent, setCurrentContent] = useState("Home");
  const handleContentChange = (content) => {
    setCurrentContent(content);
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? style.main : style.main_dark}>
        <div className={style.main_content}>
          <Header onChange={handleContentChange} />
          <AnimatePresence mode="wait">
            {currentContent === "Home" && (
              <Home onChange={handleContentChange} />
            )}
            {currentContent === "About" && (
              <About onChange={handleContentChange} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
