import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Specials from "./Specials";
import leftImg from "../assets/servers.png";
import rightImg from "../assets/server.png";

const HomePage = () => {
  return (
    <>
      <CTA />
      <Specials />
      <Testimonials />
      <section className="home-section">
        <div className="container">
          <div className="home-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Welcome to Little Lemon, a charming bistro located in the heart of
              Chicago. We offer a delightful blend of Mediterranean flavors and
              local ingredients, creating a unique dining experience for our
              guests.
            </p>
          </div>
          <div className="home-image">
            <img src={leftImg} alt="Little Lemon servers" />
            <img src={rightImg} alt="Little Lemon server" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
