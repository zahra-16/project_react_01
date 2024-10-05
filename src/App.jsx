import "./App.css";
// import Card from './components/card'
// import Button from './components/Button'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/beranda/Beranda";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import "./assets/stylebaru.scss";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Negara from "./pages/negara/Negara";
import DetailNegara from "./pages/DetailNegara";
import ThemeContext from "./components/context/ThemeContext";

function App() {
  const theme = useState("dark");
  

  const [resto, setResto] = useState();

  // const ambilData = async () => {
  //   const response = await fetch("https://dummyjson.com/products")
  //   const data = await response.json()
  //   setResto(data)
  // }

  const ambilDataAxios = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    setResto(data);
  };

  useEffect(() => {
    // ambilData()
    ambilDataAxios();
  }, []);

  console.log(resto);


  

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/produk" element={<Product />} />
          <Route path="/produk/:id" element={<ProductDetail />} />
          <Route path="/negara" element={<Negara />} />
          <Route path="/detailnegara/:id" element={<DetailNegara />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
