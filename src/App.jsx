import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [carrito, setCarrito] = useState([]);
  
  function agregarAlCarrito(producto) {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  }

  useEffect(() => {
    async function storeFakeApi() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    }
    storeFakeApi();
  }, []);

  return (
    <>
      <Navbar filterText={filterText} onFilterText={setFilterText} carrito={carrito} />
      <ProductDetails products={products} filterText={filterText} agregarAlCarrito={agregarAlCarrito} />
    </>
  );
}
