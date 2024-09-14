import './styles/Navbar.css'

function Navbar() {
  return (
    <>
        <aside className='p-2 bg-light'>
            <div className='container d-flex justify-content-between align-items-center '>
                <p className="mx-auto flex-grow-1">Delivery Gratis en Santiago por $39.990</p>
                <ul className="nav justify-content-end">
                    <li className='nav-item'>
                        <a className='nav-link' href="#">
                            <img src="/assets/facebook.svg" alt='Facebook Icons'/>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            <img src="/assets/instagram.svg" alt='Instagram Icons'/>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="#">
                            <img src="/assets/twitch.svg" alt='Twitch Icons'/>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <nav className="navbar mt-3">
            <div className='container'>
                <a className='navbar-brand' 
                   href="#" id='name-tienda'>Tienda<span className='badge bg-success'>Online</span>
                </a>
                <form className='d-flex' role='search'>
                    <input className='form-control me-2' type="search" placeholder='Search' aria-label='Search'/>
                    <button className='btn btn-outline-success' type='submit'>Search</button>
                </form>
                <aside className='shopping'>
                    <a id='cart' className='cart' data-totalitems='0' data-bs-toggle='offcanvas' href='#offcanvasExample' role='button' aria-controls='offcanvasExample'>
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
                            <div className='mb-3'>
                                <div className='card-body d-flex justify-content-center align-items-center'>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
                                        <label className='form-check-label' htmlFor="flexCheckDefault"> 
                                        </label>
                                    </div>
                                    <img className='card-img-top' src="/image/cocacola.png" alt="Cocacola imagen" style={{width: 150}}/>
                                    <h5 className='mb-5'>CocaCola a por mayor</h5>
                                </div>
                                <p className='text-start'>$140.909</p>
                                
                            </div>
                            
                            <button className='btn btn-primary w-100'>Comprar</button>
                        </div>
                    </div>

                </aside>
            </div>
            
        </nav>        
    </>
  )
}

export default Navbar