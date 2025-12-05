import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage/HomePage";
import StickersDetails from "./components/Stickers/StickersDetails.jsx";
import StickersPage from "./components/Stickers/StickersPage.jsx";
import Layout from "./Layout.jsx";
import Error404 from "./Error404";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="stickers" element={<StickersPage />} />
          <Route path="stickers/:id" element={<StickersDetails />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}
