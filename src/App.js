import React from "react";
import SideMenu from "./components/template/SideMenu";
import TopMenus from "./components/template/TopMenu";
import BookingList from "./components/pages/BookingList";
import ClientDetail from "./components/pages/ClientDetail";
import UpdateProfile from "./components/pages/ProfileUpdate";


import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className="w-full flex justify-between">

        <SideMenu />

        <div className="w-full">
          <TopMenus />

          <Routes>
            <Route path="/" element={<BookingList />} />
            <Route path="/clientdetail" element={<ClientDetail />} />
            <Route path="/updateprofile" element={<UpdateProfile />} />
          </Routes>

        </div>

      </div>
    </>
  );
}

export default App;
