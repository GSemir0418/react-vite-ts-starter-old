// import { Button } from "antd";
// import { observer } from "mobx-react";
// import { useStores } from "./store";
// import "./App.less";

// const App = () => {
//   const { countStore, equipStore } = useStores();
//   const { num, add } = countStore;
//   const { equipList, getEquipList } = equipStore;
//   return (
//     <>
//       <h2>count:{num}</h2>
//       <Button type="primary" onClick={() => add()}>
//         +1
//       </Button>
//       <h3>{equipList?.toString() ?? null}</h3>
//       <Button className={"test-button"} onClick={getEquipList}>
//         测试按钮
//       </Button>
//     </>
//   );
// };
// export default observer(App);
import Router from "./router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Home Page</Link>
      <Link to="/screen2">Screen2 Page</Link>
      <Router />
    </div>
  );
}

export default App;
