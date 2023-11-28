import React from "react";
import SideMenu from "./components/template/SideMenu";
import TopMenus from "./components/template/TopMenu";

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <div className="w-full flex justify-between">

        <SideMenu />

        <div className="w-full">
          <TopMenus />

          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/" element={<h1>about</h1>} />
            <Route path="/" element={<h1>contact</h1>} />
          </Routes>

        </div>

      </div>
    </>
  );
}

export default App;
