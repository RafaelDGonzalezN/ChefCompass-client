import "./Card.module.css";

const Card = (props) => {

  const {image, name, duration, ingredients} = props;

  const firstThreeIngredients = ingredients.slice(0, 3);

  return(
    <div className="col-md-3 mb-4">
      <div className="card h-100" style={{width: '18rem'}}>
        <img src={image} className="card-img-top img-fluid" alt={name} style={{width:"100%", height:"200px"}}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <span className="badge rounded-pill mb-3" style={{backgroundColor:"blue", color:"white"}}><i class="bi bi-clock"></i> {duration}</span>
          <h6>Ingredients: </h6>
          <ul>
            {firstThreeIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Card