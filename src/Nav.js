function Nav(){
    return(
        <nav>
          <img src={require("./icons_assets/logo_header.png")} alt="logo_LittleLemon" height={50}/>
            <ul class="nav_items_inline">
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/Reservations">Reservations</a></li>
                <li><a href="/Order">Order online</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;