import PropsTypes from "prop-types";
import {  useRef, useState } from "react";



function MemberForm(props) {
   
    const {onSuccess} =props;
    const nameRef = useRef(null);
    const maleRef = useRef(null);
    const femaleRef = useRef(null);
    const otherRef = useRef(null);
    const birth_dateRef = useRef(null);
    const url = "http://localhost:8000/api/members";
    const [error , seterror] = useState("");

   /*const [
        selectedValue,
        setSelectedValue,
    ] = useState(null);*/

    const handleSubmit = (event) => {
        event.preventDefault();
        createMember();
        
    };

    const createMember = async () => {
        const member ={
             name : nameRef.current.value,
             male : maleRef.current.value,
             female : femaleRef.current.value,
             other : otherRef.current.value,
             birth_date : birth_dateRef.current.value,
        }
        
        const response = await fetch(url,{
            method:"POST",
            body:JSON.stringify(member),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
            }
        });

        if (response.ok) {
            clearForm();
            onSuccess();
        }
        else{
            const data = await response.json();
            seterror(data.message);
        }

        onSuccess();
    };

    const clearForm = () =>{
        nameRef.current.value ="";
        maleRef.current.value="";
        femaleRef.current.value="";
        otherRef.current.value="";
        birth_dateRef.current.value="";
        seterror("");
    }

    return (
    <form onSubmit={handleSubmit}>
        <h2>Tagfelvétel</h2>
        {error!=""?(
            <div class="alert alert-danger" role="alert">
            {error}
            </div>
        ):("")}
        

        <div className="mb-3">
        <label htmlFor="name"className="form-label">Név</label>
        <input type="text" id="name" className="form-control" ref={nameRef}/>
        </div>
        
        <div className="mb-3">
        <label htmlFor="male"className="form-label">Male</label>
        <input type="radio" id="male" className="form-control" ref={maleRef}/>
        </div>
        
        <div className="mb-3">
        <label htmlFor="female"className="form-label">Female</label>
        <input type="radio" id="female" className="form-control" ref={femaleRef}/>
        </div>

        <div className="mb-3">
        <label htmlFor="other"className="form-label">Other</label>
        <input type="radio" id="other" className="form-control" ref={otherRef}/>
        </div>
               
        {/*Nem menti el a radio button gombomat!!!*/ }
              
        {/*<div className="mb-3"
            >
                <ul>
                <label htmlFor="male"className="form-label">Male</label>
                <input type="radio" id="male" className="form-control" 
                        selected={
                            selectedValue ===
                            "option1"
                        }
                        onSelect={() =>
                            setSelectedValue(
                                "option1"
                            )
                        }
                    />
                <label htmlFor="female"className="form-label">Female</label>
                <input type="radio" id="female" className="form-control" 
                        selected={
                            selectedValue ===
                            "option2"
                        }
                        onSelect={() =>
                            setSelectedValue(
                                "option2"
                            )
                        }
                    />
                <label htmlFor="other"className="form-label">Other</label>
                <input type="radio" id="other" className="form-control" 
                        selected={
                            selectedValue ===
                            "option3"
                        }
                        onSelect={() =>
                            setSelectedValue(
                                "option3"
                            )
                        }
                    />
                </ul>
            </div>*/}


       
        
        <div className="mb-3">
        <label htmlFor="birth_date"className="form-label">Születési idő</label>
        <input type="date" id="name" className="form-control" ref={birth_dateRef}/>
        </div>
        
        <button className="btn btn-primary" type="submit">Tagfelvétel</button>
    
    </form>);
    
}

MemberForm.propsTypes = {
    onSuccess: PropsTypes.func.isRequired,

};  

export default MemberForm;