import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./Layout.jsx";
import Error404 from "./Error404";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}
