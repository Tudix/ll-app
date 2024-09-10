import { Link } from "react-router-dom";
import CardSpecial from "./CardSpecial";

const data = [{
  image: "/images/greek salad.jpg",
  name: "Greek salad",
  price: 12.99,
  description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
},
{
  image: "/images/bruchetta.png",
  name: "Bruchetta",
  price: 5.99,
  description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
},
{
  image: "/images/lemon dessert.jpg",
  name: "Lemon Dessert",
  price: 5.00,
  description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
}
]

function Specials() {
  return (
    <>
      <div id="bg-Chicago">
        <div className="content-container">
          <h1>Specials</h1>
          <Link to="/menu" className="nav-item centered"><button className="button">Online Menu</button></Link>
        </div>

        <div className="special-container">
          <CardSpecial image={data[0].image} name={data[0].name} price={data[0].price} description={data[0].description} />
          <CardSpecial image={data[1].image} name={data[1].name} price={data[1].price} description={data[1].description} />
          <CardSpecial image={data[2].image} name={data[2].name} price={data[2].price} description={data[2].description} />
        </div>
      </div>
    </>
  );
}

export default Specials;