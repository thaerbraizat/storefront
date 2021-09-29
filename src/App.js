import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import SimpleCart from "./components/SimpleCart";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (

    <>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Categories />
            <Products />
            <SimpleCart />
            {/* <ProductDetails/> */}
           
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/details">
            <ProductDetails/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>





    </>
  )
}

export default App;
