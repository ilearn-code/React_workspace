import React, { Component } from "react";
import "./form_style.css"
class Formm extends Component
{

    constructor(props)
    {
        super(props)
    }
render()
{
    return  (
        <div className="Form-container">
<h2>FormSendData</h2>
<form action="">
    <div className="form-group">
<label htmlFor="name">Name</label>
    <input type="text" id="name" value={this.props.name}></input>
    </div>
    <div className="form-group">
        <label htmlFor="age">Age</label>
    <input type="text" id="age" value={this.props.age}></input>
        </div>
        <div className="form-group" >
           <label>Gender</label>
        <input type="radio" id="male" name="gender"value="male" />
        <label htmlFor="male">Male</label>
       
    <input type="radio" id="female" name="gender" value="female" />
    <label htmlFor="female">Female</label>
        </div>
        
        

    
    
   
<button>Submit</button>

</form>
        </div>







    );
}

}

export default Formm;