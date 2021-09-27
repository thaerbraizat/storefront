import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import SimpleCart from "./components/SimpleCart";

function App() {
  return (
    <>
      <Header />

      <Categories/>
      <Products/>
      <SimpleCart/>
      <Footer />

    </>
  )
}

export default App;
