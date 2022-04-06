import { observer } from "mobx-react";
import { useStores } from "./store";

const App = () => {
  const { countStore } = useStores();
  const { num, setNum } = countStore;
  return (
    <>
      <h2>counter:{num}</h2>
      <button onClick={() => setNum()}>+1</button>
    </>
  );
};
export default observer(App);
