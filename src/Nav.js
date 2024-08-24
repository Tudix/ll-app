import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav>
          <img src={require("./icons_assets/logo_header.png")} alt="logo_LittleLemon" height={50}/>
            <ul class="nav_items_inline">
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/menu" className="nav-item">Menu</Link></li>
                <li><Link to="/booking" className="nav-item">Reservations</Link></li>
                <li><Link to="/order" className="nav-item">Order online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;