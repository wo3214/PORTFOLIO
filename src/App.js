import { useState } from "react";
import { Header } from "./component/Header";
import { ThemeContext } from "./context/ThemeContext";
import style from "./styles/common.module.scss";

function App() {
  const [isDark, setIsDark] = useState(true); /* 다크모드 */

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? style.main : style.main_dark}>
        <div className={style.main_content}>
          <Header />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
