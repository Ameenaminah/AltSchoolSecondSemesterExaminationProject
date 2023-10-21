import { Outlet } from "react-router-dom";
import {Header, Footer} from ".";



export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


