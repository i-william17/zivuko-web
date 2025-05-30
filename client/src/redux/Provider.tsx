// src/redux/Provider.tsx
"use client";

import { Provider } from "react-redux";
import Store from "./store";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={Store}>{children}</Provider>;
}
