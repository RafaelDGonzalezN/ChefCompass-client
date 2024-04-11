import Card from "../Card/Card";


const Cards = ({recets}) => {

  const recetsList = recets

  return(
    <div className="container">
      <div className="row">
        {recetsList?.map((recets) => 
          <Card
            key={recets.id}
            id={recets.id}
            image={recets.image}
            name={recets.name}
            duration={recets.duration}
            ingredients={recets.ingredients}
          />)
        }
      </div>
    </div>
  
  )
}

export default Cards;