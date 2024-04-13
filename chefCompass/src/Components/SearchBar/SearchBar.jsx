const SearchBar = () => {
  return(
    <nav className= "mt-3 d-flex justify-content-center">
      <div className="container-fluid ">
        <form className="d-flex justify-content-center " role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{borderRadius:"40px", width:"25%"}}/>
          <button className="btn btn-outline-success" type="submit"  style={{borderRadius:"40px", borderColor:"LightSalmon", color:"LightSalmon"}}>Search</button>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar;