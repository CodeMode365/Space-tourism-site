import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
const LazyHome = lazy(() => import("./components/Home/Home"));
const LazyCrew = lazy(() => import("./components/Crew/Crew"));
const LazyDestination = lazy(
  () => import("./components/Destination/Destination")
);
const LazyTechnology = lazy(() => import("./components/Technology/Technology"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyHome />
            </Suspense>
          }
        ></Route>
        <Route
          path="/crew"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyCrew />
            </Suspense>
          }
        ></Route>
        <Route
          path="/destination"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyDestination />
            </Suspense>
          }
        ></Route>
        <Route
          path="/technology"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyTechnology />
            </Suspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
