const TestimonialCard = ({ rating, image, name, review }) => {
  return (
    <figure className="testimonial-card">
      <div className="testimonial-rating">⭐ {rating}</div>

      <figcaption>
        <div className="testimonial-info">
          <img src={image} alt={name} className="testimonial-img" />
          <span className="testimonial-name">{name}</span>
        </div>
      </figcaption>
      <blockquote className="testimonial-review">{review}</blockquote>
    </figure>
  );
};

export default TestimonialCard;
