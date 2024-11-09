import { useState, useEffect } from 'react';

function Cart({ carrito }) {
  const [selectAll, setSelectAll] = useState(false);
  const [eliminatedItems, setEliminatedItems] = useState([]);
  const [counter, setCounter] = useState(carrito?.length || 0);

  useEffect(() => {
    setCounter(carrito?.length - eliminatedItems.length);
  }, [carrito, eliminatedItems]);

  const handleRemoveItem = (index) => setEliminatedItems((prev) => [...prev, index]);

  return (
    <aside className='shopping'>
      <a
        id='cart'
        className='cart'
        data-totalitems={counter}
        data-bs-toggle='offcanvas'
        href='#offcanvasExample'
        role='button'
        aria-controls='offcanvasExample'
      >
        <img src='/assets/shopping.svg' alt='Shopping Icon' style={{ width: 24, height: 24 }} />
      </a>
      <div className='offcanvas offcanvas-start' tabIndex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title'>Carro</h5>
          <button className='btn-close' type='button' data-bs-dismiss="offcanvas" aria-label='close'></button>
        </div>
        <div className='offcanvas-body'>
          <div className='form-check'>
            <input className='form-check-input' type='checkbox' onChange={(...prev) => [...prev, setSelectAll(!selectAll)]} checked={selectAll} />
            <label className='form-check-label'>Seleccionar todos</label>
          </div>
          <hr className='border' />
          {counter > 0 ? (
            carrito.map((product, index) => !eliminatedItems.includes(index) && (
              <div key={index} className='mb-3'>
                <button className='btn-close' onClick={() => handleRemoveItem(index)}></button>
                <div className='card-body d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' checked={selectAll} readOnly/>
                  <img src={product.image} alt={product.title} style={{ width: 150 }} />
                  <p className='mb-5'>{product.title}</p>
                </div>
                <p className='text-start'>${product.price}</p>
              </div>
            ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
          <span>Total: ${carrito.filter((_, i) => !eliminatedItems.includes(i)).reduce((sum, { price }) => sum + price, 0).toFixed(2)}</span>
          <button className='btn btn-primary w-100'>Comprar</button>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
