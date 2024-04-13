const Register = () => {

  return(
    <div className="container">
      <form class="mt-5 " style={{backgroundColor:"green"}}>
      <div class="row mt-5">
        <div class="col-6">
          <label form="nombre" class="form-label">Nombre</label>
          <input type="text" id="nombre" class="form-control"/>
        </div>
        <div class="col-6">
          <label form="Apellido" class="form-label">Apellido</label>
          <input type="text" id="Apellido" class="form-control"/>
        </div>
        <div class="col-6 mt-2">
          <label form="telefono" class="form-label">Telefono</label>
          <input type="text" id="telefono" class="form-control"/>
        </div>
        <div class="col-6 mt-2">
          <label form="Correo" class="form-label">Correo Electronico</label>
          <input type="text" id="correo" class="form-control"/>
        </div>

        <div class="row mb-3 mt-5">
          <label form="email" class="col-sm-2 col-form-label">Email:</label>
          <div class="col-sm-10">
            <input type="text"  class="form-control" id="email"/>
          </div>
        </div>
        <div class="mb-3 row">
          <label form="pass" class="col-sm-2 col-form-label">contraseña:</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="pass"/>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  )
}

export default Register;