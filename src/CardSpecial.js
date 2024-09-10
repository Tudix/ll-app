import { Link } from "react-router-dom";

function CardSpecial(props) {
  return (
    <div className="special">

      <img src={props.image} alt="special" />
      <div className="special-content">
        <div className="space-between">
          <h2 className="centered">{props.name}</h2>
          <span className="centered">${props.price.toFixed(2)}</span>
        </div>
        <p className="special-description">{props.description}</p>
        <Link to="/menu" className="nav-item bottom">
          <div className="items_inline">
            <h4>Order a delivery</h4>
            <img className="centered" src={require("./icons_assets/fast-delivery.png")} alt="special" width={35} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardSpecial;