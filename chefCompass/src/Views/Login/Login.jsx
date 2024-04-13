const Login = () => {

  return(
    <div  className="container">
      <form className="mt-5">
        <h1 className="display-6">Login!</h1>
          <div>
            <label for="correo" class="form-label">Correo Electronico</label>
            <input type="text" id="correo" class="form-control"/>
          </div>
          <div class="mt-2">
            <label for="contrasena" class="form-label">Password</label>
            <input type="password" id="contrasena" class="form-control" aria-describedby="passwordHelp"/>
            <div id="passwordHelp" class="form-text">
              tu contrasena debe tener 8 caracteres 
            </div>
          </div>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  )
}

export default Login;