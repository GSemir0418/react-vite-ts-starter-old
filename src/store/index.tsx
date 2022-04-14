import * as React from "react";
import { configure } from "mobx";
import countStore from "./CountStore";
import asyncStore from "./asyncStore";
import equipStore from "./equipStore";

configure({ enforceActions: "always" });

// 要将每个store整合为一个
export const stores = { countStore, equipStore, asyncStore };
// 创建上下文对象，将全部store文件存入全局上下文环境中，供各组件使用
export const storeContext = React.createContext(stores);

// 封装useStores hook，对外提供使用上下文环境的接口
export const useStores = () => React.useContext(storeContext);
