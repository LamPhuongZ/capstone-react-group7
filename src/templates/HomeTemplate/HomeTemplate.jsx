import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function HomeTemplate() {
  return (
    <div style={{ marginTop: "74px" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeTemplate;
