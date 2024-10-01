import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import MemberCard from "./MemberCard";
import MemberForm from "./MemberForm";

function App() {

  const [members, setMembers] = useState([]);
  const url = "http://localhost:8000/api/members";


  const readAllMembers = async() => {
    const response = await fetch(url)
    const data = await response.json();
    setMembers(data.data);
  }

  useEffect(()=>{
    readAllMembers()
  })

  return (<>
  <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#newmember">Új tag felvétele</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://petrik.hu/">Petrik honlap</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
      <div className="container">  
        <h1>Petrik könyvklub</h1>
      </div>
</header>
<main className="container">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {members.map(member => <MemberCard key = {member.id} members = {member} />)}
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3" id="newmember">
    < MemberForm onSuccess = {readAllMembers}/>
    </div>
</main>
<footer className="container">
    <p>Készítette: Évi</p>
</footer>
  </>);
}

export default App;