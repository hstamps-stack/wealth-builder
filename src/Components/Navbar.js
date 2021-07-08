import { Link } from "react-router-dom";
const Navbar= () =>{
    return (
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark p-4">
            <div className="container-fluid">
                <Link to ="/" className="navbar-brand">Wealth Builder</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <Link to ="/" className='nav-link'>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link  to ="/stocks"className='nav-link'>
                                    Stocks
                                </Link>
                            </li>
                           
                        </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;