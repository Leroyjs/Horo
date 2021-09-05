import React from "react";

import { Main } from "./src/components/Main.js";

import { Provider } from "react-redux";
import store from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}
