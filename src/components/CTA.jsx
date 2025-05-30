import HomeImage from "../assets/serving-bruschetta.png";
import Button from "./Button";

const CTA = () => {
  return (
    <>
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <article className="cta-content">
            <header>
              <h1 id="cta-heading">Little Lemon</h1>
              <h2>Chicago</h2>
            </header>
            <section>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <Button
                className="cta-button"
                label="Reserve a Table"
                bgColor="var(--primary-yellow)"
                type="button"
              />
            </section>
          </article>
        </div>
        <figure className="cta-image">
          <img
            src={HomeImage}
            alt="Person serving bruschetta at Little Lemon"
          />
        </figure>
      </section>
      <div className="white-background"></div>
    </>
  );
};

export default CTA;
