import './styles/Navbar.css'

function Navbar() {
  return (
    <>
        <aside className='p-2 bg-light'>
            <div className='container d-flex justify-content-between align-items-center '>
                <p className="text-center mx-auto text-center flex-grow-1">Delivery Gratis en Santiago por $39.990</p>
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
        <nav className="navbar">

        </nav>        
    </>
  )
}

export default Navbar