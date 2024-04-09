import "./Card.module.css";

const Card = () => {
  return(
    <div className="card" style={{width: '18rem'}}>
      <img src="https://t2.uc.ltmcdn.com/es/posts/3/8/5/como_hacer_arroz_con_leche_50583_600.jpg" className="card-img-top" alt="arroz con leche"/>
      <div className="card-body">

        <h5 className="card-title">Arroz Con leche</h5>
        <span className="badge rounded-pill mb-3" style={{backgroundColor:"blue", color:"white"}}>Duracion: 20 - 30 min</span>
        <h6>Ingredientes:</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}

export default Card