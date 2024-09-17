import Cart from './Cart';
import './styles/Navbar.css';

function Navbar({ filterText, onFilterText, carrito }) {
  return (
    <>
      <aside className='p-2 bg-light'>
        <div className='container d-flex justify-content-between align-items-center'>
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
          <a className='navbar-brand' href="#" id='name-tienda'>
            Tienda<span className='badge bg-success'>Online</span>
          </a>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              value={filterText}
              onChange={(e) => onFilterText(e.target.value)}
              type="search"
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
          <Cart carrito={carrito} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
