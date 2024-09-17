import ProductCard from "./ProductCard";

function ProductDetails({ products, filterText, agregarAlCarrito }) {
  return (
    <main className="mt-3">
      <h2 className="text-center">Productos</h2>
      <div className="row d-flex justify-content-center">
        {products
          .filter(product => product.title && product.title.toLowerCase().includes(filterText.toLowerCase()))
          .map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))
        }
      </div>
    </main>
  );
}

export default ProductDetails;
