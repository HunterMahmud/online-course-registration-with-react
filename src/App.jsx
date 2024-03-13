import { useState } from "react";
import "./App.css";
import Cart from "./components/cart";
import Courses from "./components/courses/Courses";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <div className="">
        <div>
          <Courses />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
