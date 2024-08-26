import CardRating from "./CardRating";

const data =  {
    name: "Name",
    review: "Review text"
}

function CustomersSay() {
    return (
       <div className="bg-rating-container">
        <h2 className="centered">Testimonials</h2>
        <div className="card-container">
            <CardRating name={data.name} review={data.review}/>
            <CardRating name={data.name} review={data.review}/>
            <CardRating name={data.name} review={data.review}/>
            <CardRating name={data.name} review={data.review}/>
        </div>
       </div>
    );
  }

  export default CustomersSay;