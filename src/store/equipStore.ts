import { makeAutoObservable } from "mobx";
import { getList } from "../api/equipAPI";

class Equip {
  constructor() {
    makeAutoObservable(this);
  }
  equipList = [];
  getEquipList = () => {
    getList()
      .then((res) => {
        console.log(res);
        this.equipList = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
export default new Equip();
