import React from "react";
import "./App.css";
import TicketNav from "./components/TicketNav";
import { Toaster } from "react-hot-toast";
import SearchYourSeat from "./components/SearchYourSeat";
import PvrHome from "./components/PvrHome";
import SeatLayout2 from "./components/SeatLayout2";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <TicketNav />
      <BrowserRouter>
        <SearchYourSeat />
        <PvrHome />
        <SeatLayout2 />
      </BrowserRouter>
    </div>
  );
}

export default App;
