import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Child1 from "./Child1";
//import {trnsaction} from './transContext'
import { TrasactionProvider } from "./transContext";

function App() {
  return (
    <TrasactionProvider>
      <Child1 />
    </TrasactionProvider>
  );
}

export default App;
