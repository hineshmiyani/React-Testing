import React from "react";
import "./App.css";
import { MuiMode } from "./componets/MuiMode/MuiMode";
import { AppProviders } from "./providers/AppProviders";
// import Counter from "./componets/Counter/Counter";
// import Skills from "./componets/Skills/Skills";
// import logo from "./logo.svg";
// import { Application } from "./componets/Application/Application";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Skills skills={["HTML", "CSS", "JAVASCRIPT"]} /> */}
        {/* <Application /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
