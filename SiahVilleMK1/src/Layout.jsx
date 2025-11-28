import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
