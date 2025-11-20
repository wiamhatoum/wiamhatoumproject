import React from 'react'
import { useState } from 'react';
import '../styles/feedback.css'
function Feedback() {
  const [state, setState] = useState({ fname: "" ,email: "", message: "" });

  const handleChange = e =>{
    const name = e.target.name;
    const value = e.target.value;
    

    setState({ ...state, [name] : value });

  };
  const handleSubmit = e => {
    if(state.fname === ""){
      alert("name should not be empty");
      return;
    }
    if(state.fname.length < 3){
      alert("name should be at least 3 characters");
      return;
    }
    if(state.email === ""){
      alert("please enter a valid email");
      return;
    }
    if(state.message === ""){
      alert("message should not be empty");
      return;
    }
    
    alert (JSON.stringify(state));
  };

  return (
    <div className="feedback">

        <h1> Feedback</h1>

        <form id="contact-form" >
          <label htmlFor="name">Full Name</label>
          <input name="fname" placeholder="Enter full name..." type="text" onChange={handleChange}/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" onChange={handleChange} />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required onChange={handleChange}
          ></textarea>
          <button type="submit" onClick = {handleSubmit}> Send Message</button>
        </form>
      
    </div>
  );
}

export default Feedback;
