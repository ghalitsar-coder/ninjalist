import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-[400px] my-10 ">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
