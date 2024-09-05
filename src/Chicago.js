function Chicago() {
  return (
    <div id="bg-Chicago">
      <div className="content-container">
        <div className="columns-2">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div id="centered" className="image-container">
          <img src={require("./icons_assets/restaurant chef B.jpg")} alt="ChicagoA_LittleLemon" className="image-diagonal image-1" style={{ width: "45%" }} />
          <img src={require("./icons_assets/Mario and Adrian A.jpg")} alt="ChicagoB_LittleLemon" className="image-diagonal image-2" style={{ width: "45%" }} />
        </div>
      </div>
    </div>
  );
}

export default Chicago;