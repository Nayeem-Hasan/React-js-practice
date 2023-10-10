import React from 'react';
import { useState } from 'react';
import Menu from '../component/Menu';

const Contact = () => {

    let[FormObj,SetFormObj]=useState({fName:"", lName:"", city:"", gender:""})

  const InputOnChange = (property,value) => {
    SetFormObj(prevObj=>({
      ...prevObj,
      [property]:value
    }))
  }

  const Formsubmit=(e)=>{
    e.preventDefault();
    console.log(FormObj)

  }
    return (
        <div>

            <Menu/>

            <h1>Output Showing On Console</h1>
            <form onSubmit={Formsubmit}>
                <input onChange={(e)=>{InputOnChange("fName",e.target.value)}} value={FormObj.fName} placeholder="First Name" /> <br />
            
                <input onChange={(e)=>{InputOnChange("lName",e.target.value)}} value={FormObj.lName} placeholder="Last Name" /> <br />
                <select onChange={(e)=>{InputOnChange("city",e.target.value)}} value={FormObj.city}>
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rangpur">Rangpur</option>
                </select>
                <br />
                <input onChange={(e)=>{InputOnChange("gender",'Male' )}} checked={FormObj.gender==="Male"} type="radio" name="gender" id="" />Male
                <input onChange={(e)=>{InputOnChange("gender", 'Female',e.target.value)}} checked={FormObj.gender==="Female"} type="radio" name="gender" id="" />Female
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;