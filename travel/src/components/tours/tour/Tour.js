import { Link } from "react-router-dom";
import './Tour.css';
function Tour(props) {
  return (
    <>
      <Link to={`/city/${props.id}`}>
        <div class="card card-content">
          <h2>{props.name}</h2>
          <img src={props.image} alt={props.name}></img>
        </div>
      </Link>
    </>
  );
}
export default Tour;
