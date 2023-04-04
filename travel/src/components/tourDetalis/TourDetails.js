import { useState } from "react";
import { useParams } from "react-router-dom";
import './TourDetails.css'

function TourDetails(props) {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const tour = props.data.filter((tour) => tour.id === id)[0];

  if (!tour) {
    return <div>Error: Tour not found</div>;
  }

  const descriptionLines = tour.info.split("\n").slice(0, 3);
  const shortDescription = descriptionLines.join("\n");

  return (
    <div>
      <h2>{tour.name}:</h2>
      <p>{showFullDescription ? tour.info : shortDescription}</p>
      {descriptionLines.length < tour.info.split("\n").length && (
        <button onClick={() => setShowFullDescription(!showFullDescription)}>
          {showFullDescription ? "See Less" : "See More"}
        </button>
      )}
      <p>Cost: {tour.price}$</p>
      <img src={tour.image} alt={tour.name} />
    </div>
  );
}

export default TourDetails;
