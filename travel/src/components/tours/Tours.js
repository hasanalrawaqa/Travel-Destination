import Tour from "./tour/Tour";

function Tours(props) {
  const tour = props.data;
  return (
    <>
      {tour.map((element) => {
        return (
          <Tour
            key={element.id}
            id={element.id}
            name={element.name}
            image={element.image}
          />
        );
      })}
    </>
  );
}
export default Tours;
