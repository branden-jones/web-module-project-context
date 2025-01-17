import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext.js";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App(props) {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  const removeItem = (el) => {
    const { id } = el;
    const filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
  };

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, removeItem }}>
        <Navigation />

        {/* Routes */}
        <ProductContext.Provider value={{ products, addItem }}>
          <Route exact path="/">
            <Products />
          </Route>
        </ProductContext.Provider>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </CartContext.Provider>
    </div>
  );
}

export default App;
