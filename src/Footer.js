function Footer(){
    return(
        <footer>
            <img src={require("./icons_assets/logo.png")} alt="logo_LittleLemon" height={250}/>
            <div>
                <h5>Navigation</h5>
                <ul class="nav_items_column">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Menu">Menu</a></li>
                    <li><a href="/Reservations">Reservations</a></li>
                    <li><a href="/Order">Order Online</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>
            </div>
            <div>
            <h5>Contact</h5>
                <ul class="nav_items_column">
                    <li><a href="/Adress">Adress</a></li>
                    <li><a href="/Phone">Phone Number</a></li>
                    <li><a href="/Email">Email</a></li>
                </ul>
            </div>
            <div>
            <h5>Social Media Links</h5>
                <ul class="nav_items_column">
                    <li><a href="/Instagram">Instagram</a></li>
                    <li><a href="/Facebook">Facebook</a></li>
                    <li><a href="/TikTok">Tiktok</a></li>
                    <li><a href="/Youtube">Youtube</a></li>
                    <li><a href="/X">X</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;