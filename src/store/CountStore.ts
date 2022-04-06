import { makeAutoObservable } from "mobx";

class Count {
  constructor() {
    makeAutoObservable(this);
  }
  num = 0;
  setNum = () => {
    this.num += 1;
  };
}
export default new Count();
