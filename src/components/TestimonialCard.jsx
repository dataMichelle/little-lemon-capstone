const TestimonialCard = ({ rating, image, name, review }) => {
  return (
    <figure className="testimonial-card">
      <figcaption>
        <div className="testimonial-info">
          <img src={image} alt={name} className="testimonial-img" />
          <span className="testimonial-name">{name}</span>
        </div>
      </figcaption>
      <div className="testimonial-rating">⭐ {rating}</div>
      <blockquote className="testimonial-review">{review}</blockquote>
    </figure>
  );
};

export default TestimonialCard;
