import { Button } from "antd";
import { observer } from "mobx-react";
import { useStores } from "./store";
import "./App.less";

const App = () => {
  const { countStore } = useStores();
  const { num, add } = countStore;
  return (
    <>
      <h2>count:{num}</h2>
      <Button type="primary" onClick={() => add()}>
        +1
      </Button>
      <Button className={"test-button"}>测试按钮</Button>
    </>
  );
};
export default observer(App);
