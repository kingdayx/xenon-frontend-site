import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Community from "./Community";
import Navbar from "./Navbar";

const Header = lazy(() => import("./Header"));
const Lending = lazy(() => import("./Lending"));
const PitchDeck = lazy(() => import("./PitchDeck"));
const Stake = lazy(() => import("./Stake"));
const XenonWorld = lazy(() => import("./XenonWorld"));
const Application = lazy(() => import("./Application"));
const Pool = lazy(() => import("./Application/Pool"));

const App1 = () => {
  return (
    <div>
      <Header />
      <XenonWorld />
      <Stake />
      <PitchDeck />
      <Lending />
      <Community />
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<App1 />} />
        <Route path="/*" exact element={<Application />} />
        <Route path="/:id/pool" exact element={<Pool />} />
      </Routes>
    </Suspense>
  );
}

export default App;
