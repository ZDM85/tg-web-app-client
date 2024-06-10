import React, { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/productList/ProductList";
import Form from "./components/form/Form";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
