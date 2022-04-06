import * as React from "react";
import { configure } from "mobx";
import countStore from "./CountStore";

configure({ enforceActions: "always" });

export const stores = { countStore };
export const CounterContext = React.createContext(stores);

export const useStores = () => React.useContext(CounterContext);