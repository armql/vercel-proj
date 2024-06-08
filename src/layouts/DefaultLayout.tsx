import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import { Fragment, lazy } from "react";
import useOnLoad from "../hooks/useOnLoad.ts";
import SplashScreen from "../components/SplashScreen.tsx";

const Footer = lazy(() => import("../components/Footer.tsx"));

function DefaultLayout() {
  const { loading } = useOnLoad(1800);

  if (loading) {
    return <SplashScreen />;
  } else {
    return (
      <Fragment>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default DefaultLayout;
