import * as React from "react";
import { configure } from "mobx";
import countStore from "./countStore";
import equipStore from "./equipStore";

configure({ enforceActions: "always" });

export const stores = { countStore, equipStore };
export const storeContext = React.createContext(stores);

export const useStores = () => React.useContext(storeContext);
