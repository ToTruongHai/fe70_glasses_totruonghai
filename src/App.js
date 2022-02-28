import logo from "./logo.svg";
import "./App.css";
import BaiTapThuKinh from "./BaiTapThuKinh/BaiTapThuKinh";

function App() {
  return (
    <div className={"App app__bg"} style={{backgroundImage: `url('./glassesImage/background.jpg')`}}>
      <BaiTapThuKinh/>
    </div>
  );
}

export default App;
