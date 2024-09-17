import Button from "./Button";

function ProductCard({ title, price, image, agregarAlCarrito }) {
  return (
    <div className="card m-3" style={{ width: 300 }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <Button
          onClick={() => agregarAlCarrito({ title, price, image })}
          value="bg-primary w-100 text-center"
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
