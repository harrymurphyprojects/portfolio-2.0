function Profile() {
  return (
    <>
      <div className="container d-flex justify-content-evenly p-5 bg-light border">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHeOXY5CZu1-g/profile-displayphoto-shrink_800_800/0/1646933286274?e=1652313600&v=beta&t=mdKy2XXGMsH_dypRv4Arusiao5cB92CT7YDVS3aXSgA"
          className="img-fluid rounded-circle picture">
        
        </img>
        <div className="container text-end">
          <h1 className="display-3 pt-2 justify-text-end" >Harry Murphy</h1>
          <h2 className="display-6 pt-2 text-muted" >Junior Software Engineer</h2>
        </div>
      </div>
    </>
  )
}

export default Profile