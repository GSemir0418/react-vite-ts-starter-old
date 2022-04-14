import { Button } from "antd";
import { observer } from "mobx-react";
import { useStores } from "../../store";

const Page2 = () => {
  const { asyncStore } = useStores();
  // 异步方法不能在store中解构取出
  const { equips } = asyncStore;
  return (
    <>
      <div>mobx完全体使用</div>
      <Button
        onClick={() => {
          asyncStore.getEquipList();
        }}
      >
        请求
      </Button>
      <div>{equips.toString()}</div>
    </>
  );
};
export default observer(Page2);
