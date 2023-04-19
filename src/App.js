import { Header } from "./component/Header";
import style from "./styles/common.module.scss";

function App() {
  return (
    <div className={style.main}>
      <div className={style.main_content}>
        <Header />
      </div>
    </div>
  );
}

export default App;
