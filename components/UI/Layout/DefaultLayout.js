import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout(props) {
  const { classes } = props;
  return (
    <div className="layout-default h-screen relative">
      <div className="wrapper h-screen bg-white text-black dark:bg-gray-900	 dark:text-white">
        <Header></Header>
        <main className="px-6">{props.children}</main>
        <Footer></Footer>
      </div>
    </div>
  );
}
