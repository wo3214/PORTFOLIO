import { useState } from "react";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { About } from "./component/about/About";
import { Project } from "./component/project/Project";
import { Contact } from "./component/Contact";
import { ThemeContext } from "./context/ThemeContext";
import style from "./styles/common.module.scss";
import { AnimatePresence } from "framer-motion";
import { Plani } from "./component/project/PlanI";
import { Moa } from "./component/project/Moa";
import { Poke } from "./component/project/Poke";

function App() {
  const [isDark, setIsDark] = useState(true); /* 다크모드 */
  const [currentContent, setCurrentContent] = useState("Home");
  const handleContentChange = (content) => {
    setCurrentContent(content);
  }; /* 페이지 이동 */

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
            {currentContent === "Project" && (
              <Project onChange={handleContentChange} />
            )}
            {currentContent === "Contact" && (
              <Contact onChange={handleContentChange} />
            )}
            {currentContent === "Plani" && (
              <Plani onChange={handleContentChange} />
            )}
            {currentContent === "Poke" && (
              <Poke onChange={handleContentChange} />
            )}
            {currentContent === "Moa" && <Moa onChange={handleContentChange} />}
          </AnimatePresence>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
