function CardRating(props) {
    return (
      <div className="card">

            <h4>Rating</h4>
            <div className="items_inline">
                <img src={require("./icons_assets/rating_star.png")} alt="rating_star" width={100}/>
                <h4 className="centered">{props.name}</h4>
            </div>
            <h5>{props.review}</h5>

      </div>
    );
  }

  export default CardRating;