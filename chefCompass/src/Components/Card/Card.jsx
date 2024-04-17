import { Link } from "react-router-dom";
import "./Card.module.css";

const Card = (props) => {

  const {image, name, duration, ingredients,id} = props;

  const ingredientList = ingredients.split(", ");

  return(
    <div className="col-md-3 mb-4">
      <div className="card h-100" style={{width: '18rem'}}>
        <img src={image} className="card-img-top img-fluid" alt={name} style={{width:"100%", height:"200px"}}/>
        <Link to={`/detail/${id}`}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <span className="badge rounded-pill mb-3" style={{backgroundColor:"blue", color:"white"}}><i class="bi bi-clock"></i> {duration}</span>
            {/* <h6>Ingredients: </h6>
             <ul>
            {ingredientList.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul> */}
          </div>
        </Link>
      </div>
    </div>

  )
}

export default Card