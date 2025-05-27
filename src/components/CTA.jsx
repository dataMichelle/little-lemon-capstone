import HomeImage from "../assets/serving-bruschetta.png";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="cta-button">Reserve a Table</button>
      </div>
      <div className="cta-image">
        <img src={HomeImage} />
      </div>
    </section>
  );
};

export default CTA;
