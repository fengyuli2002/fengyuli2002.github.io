import { useEffect, useState } from "react";
import Intro from "./components/intro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      {window.innerWidth < 768 && (
        <div>
          <p>
            <i>This website is not compatible with phone-sized screens.</i>
          </p>
          <hr></hr>
        </div>
      )}
      <Intro></Intro>
    </div>
  );
}

export default App;
