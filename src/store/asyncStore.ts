import { makeAutoObservable } from "mobx";
import { getList } from "../api/equipAPI";
class AsyncStore {
  constructor() {
    makeAutoObservable(this);
  }
  // 实例属性变为observable
  equips: any[] = [];

  // 实例方法变为autoAction
  setEquip(data: any[]) {
    this.equips = data;
  }

  // 异步方法可以使用generator，会被mobx解析为flow类型
  *getEquipList(): any {
    const resp = yield getList();
    this.setEquip(resp.data);
  }
}

// 导出Count类的实例
export default new AsyncStore();
