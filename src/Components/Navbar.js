const Navbar= () =>{
    return (
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark p-4">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Wealth Builder</a>
                <button className="navbar-toggler" type="button" data-bs-toggle>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <a className='nav-link' href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link' href="#">
                                    Stocks
                                </a>
                            </li>
                           
                        </ul>
                        {/* <div className='navbar-nav'>
                            <a className='nav-link'  href="#">
                                Stocks
                            </a>
                        </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;