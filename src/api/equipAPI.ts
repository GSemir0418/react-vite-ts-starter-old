import myAxios from "./request";

export function getList() {
  return myAxios.request({
    url: "/inter-api/scmBps/v1/equip/getList",
    method: "get",
  });
}
