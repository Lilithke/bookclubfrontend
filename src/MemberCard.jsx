import PropTypes from "prop-types";


function MemberCard(props) {
    const {members}=props;
    const url =  "http://localhost:8000/api/members";
    const pay = async() =>{
        const response = await fetch(url + "/" + members.id + "/pay",{
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            alert("Sikeres befizetés!");
        }
        else{
            const data = await response.json();
            alert(data.message);
        }
    }

    return ( <div className="col card">
        <div className="card-body">
            <h2>{members.name}</h2>
            <p>Született: {members.birth_date}</p>
            <p>Csatlakozott: {members.created_at}</p>
         </div>

            <div>
                {(() => {
                    if (members.gender == 'M') {
                    return (
                        <div> <img className= "img-fluid" src={'/clubkepek/male.png'} alt= "Male" /></div>
                    )
                    } else if (members.gender == "F") {
                    return (
                        <div> <img className= "img-fluid" src={'/clubkepek/female.png'} alt= "Female"/></div>
                    )
                    } else if(members.gender == null){
                    return (
                        <div> <img className= "img-fluid" src={'/clubkepek/other.png'} alt= "Other"/></div>
                    )
                    }
                })()}

                <button className="btn btn-primary" onClick={()=>pay()}>Tagdíj befizetés</button>
            </div>

    </div> );
}

MemberCard.proptype ={
    members : PropTypes.object.isRequired,
};



export default MemberCard;