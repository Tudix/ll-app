import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div id="bg-call-to-action">
      <div className="content-container">
        <div className="columns-2">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to="/booking" className="nav-item"><button className="button">Reserve a Table</button></Link>
        </div>
        <div id="image-container" className="columns-2">
          <img src={require("./icons_assets/Mario and Adrian A.jpg")} alt="CTA_LittleLemon" className="responsive centered" style={{ width: "70%" }} />
        </div>
      </div>
    </div >
  );
}

export default CallToAction;