import "./StarRating.css";

const Star = ({ filled }) => (
  <svg
    className={`star ${filled ? "filled" : ""}`}
    height="16"
    viewBox="0 0 24 24"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .587l3.668 7.431 8.332 1.209-6.04 5.884 1.423 8.305L12 18.896l-7.383 3.874 1.423-8.305-6.04-5.884 8.332-1.209z" />
  </svg>
);

const StarRating = ({ rating }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= rating} />
      ))}
    </div>
  );
};

export default StarRating;
