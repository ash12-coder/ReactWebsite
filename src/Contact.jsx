import React, { useState } from 'react';

const Contact = () =>{

const [data, setdata] = useState({
    fullname:'',
    mobile:'',
    email:'',
    text:'',
});

const InputValue = (event) =>{
    const {name,value} = event.target;

    setdata((predata) =>{
        return{
            ...predata,
            [name] : value
        }
    })
}

const submitdata = () =>{
    setdata('');
}

    return (
       <>
       <div className="contact">
        <div className="contact1">
            <h1>Contact Us</h1>
        </div>
        <div className="contact2">
            <form >
                <input type="text" onChange={InputValue} placeholder="Name" name="fullname" value={data.fullname} required/>
                <br/>
                
                <input type="text" onChange={InputValue} placeholder="Mobile No." name="mobile" value={data.mobile} required/>
                <br/>
                
                <input type="email" onChange={InputValue} placeholder="name@xyz.com" name="email" value={data.email} required/>
                <br/>
                
                <textarea placeholder="Message" name="text" value={data.text} name="text" required />
                <br/>
                <button type="submit" onClick={submitdata}>Submit Form</button>
        </form>
        </div>
       </div>
       </>
    )
}

export default Contact;