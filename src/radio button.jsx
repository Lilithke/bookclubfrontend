import PropsTypes from "prop-types";
import setState from "react";

function Radiobutton(props) {

  const {buttons} =props;
  this.onValueChange = this.onValueChange.bind(this);


  onValueChange=(event)=>{
    event.preventDefault();
    buttons();
    setState({
      selectedOption: event.target.value
    });
  }

  

 
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
              onChange={this.onValueChange}
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
       
      </form>
    );
  }


Radiobutton.PropsTypes = {
  buttons: PropsTypes.func.isRequired,

}; 

export default Radiobutton;