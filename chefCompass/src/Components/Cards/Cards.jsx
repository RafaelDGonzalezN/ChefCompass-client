import Card from "../Card/Card";


const Cards = ({recetas}) => {


  if (!Array.isArray(recetas)) {
    return <div>No hay recetas disponibles</div>;
  }

  return(
    <div className="container ">
      <div className="row">
        {recetas.map((receta) => 
          <Card
            key={receta.id}
            id={receta.id}
            image={receta.image}
            name={receta.name}
            duration={receta.duration}
            ingredients={receta.ingredients}
          />)
        }
      </div>
    </div>
  
  )
}

export default Cards;