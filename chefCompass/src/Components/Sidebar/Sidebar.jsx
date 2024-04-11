

const Sidebar = () => {
  return (
    <div className="container" style={{backgroundColor:"yellow", width:"20%", height:"80%", borderRadius:"5px"}}>
      <nav className="nav flex-column">
        <a className="nav-link active" aria-current="page" href="#">Active</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </nav>
    </div>
    
  )
}

export default Sidebar;