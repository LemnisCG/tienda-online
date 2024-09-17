function Cart({ carrito }) {
    return (
      <aside className='shopping'>
        <a id='cart' className='cart' data-totalitems={carrito?.length || 0} data-bs-toggle='offcanvas' href='#offcanvasExample' role='button' aria-controls='offcanvasExample'>
          <img src='/assets/shopping.svg' alt='Shopping Icon' style={{width: 24, height:24}} />
        </a>
        <div className='offcanvas offcanvas-start' tabIndex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasExampleLabel'>Carro</h5>
            <button className='btn-close' type='button' data-bs-dismiss="offcanvas" aria-label='close'></button>
          </div>
          <div className='offcanvas-body'>
            <div className='form-check'>
              <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
              <label className='form-check-label' htmlFor="flexCheckDefault"> 
                Seleccionar todos
              </label>
            </div>
            <hr className='border'/>
            {carrito && carrito.length > 0 ? (
              carrito.map((product, index) => (
                <div key={index} className='mb-3'>
                  <div className='card-body d-flex justify-content-center align-items-center'>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id={`flexCheck${index}`} />
                      <label className='form-check-label' htmlFor={`flexCheck${index}`}></label>
                    </div>
                    <img src={product.image} alt={product.title} style={{width: 150}}/>
                    <p className='mb-5'>{product.title}</p>
                  </div>
                  <p className='text-start'>${product.price}</p>
                </div>
              ))
            ) : (
              <p>No hay productos en el carrito.</p>
            )}
            <span>Total: 
                 ${carrito.reduce((counter, counterValue) => counter + counterValue.price, 0).toFixed(2)}
            </span>
            <button className='btn btn-primary w-100'>Comprar</button>
          </div>
        </div>
      </aside>
    );
  }
  
  export default Cart;
  