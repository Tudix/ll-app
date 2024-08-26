import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="footer-content">
                <img src={require("./icons_assets/logo.png")} alt="logo_LittleLemon" height={250} className="neon"/>
                <div>
                    <h5>Navigation</h5>
                    <ul class="nav_items_column">
                        <li><Link to="/" className="nav-item">Home</Link></li>
                        <li><Link to="/about" className="nav-item">About</Link></li>
                        <li><Link to="/menu" className="nav-item">Menu</Link></li>
                        <li><Link to="/booking" className="nav-item">Reservations</Link></li>
                        <li><Link to="/order" className="nav-item">Order online</Link></li>
                        <li><Link to="/login" className="nav-item">Login</Link></li>
                    </ul>
                </div>
                <div>
                <h5>Contact</h5>
                    <ul class="nav_items_column">
                        <li><Link to="/adress" className="nav-item">Adress</Link></li>
                        <li><Link to="/phone" className="nav-item">Phone Number</Link></li>
                        <li><Link to="/email" className="nav-item">Email</Link></li>
                    </ul>
                </div>
                <div>
                <h5>Social Media Links</h5>
                    <ul class="nav_items_column">
                        <li><Link to="https://www.instagram.com/" className="nav-item" target="_blank">Instagram</Link></li>
                        <li><Link to="https://www.facebook.com/" className="nav-item" target="_blank">Facebook</Link></li>
                        <li><Link to="https://www.tiktok.com/" className="nav-item" target="_blank">TikTok</Link></li>
                        <li><Link to="https://www.youtube.com/" className="nav-item" target="_blank">Youtube</Link></li>
                        <li><Link to="https://x.com/" className="nav-item" target="_blank">X</Link></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;