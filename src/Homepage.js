import Chicago from "./Chicago";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import CallToAction from "./CallToAction";

function HomePage() {
  return (
    <>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
    </>
  );
}

export default HomePage;