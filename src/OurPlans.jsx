import React, { useState } from 'react';
import DataWithAll from './DataWithAll';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';
import {NavLink} from 'react-router-dom';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const OurPlans = () =>{
    const [mobile, setmobile] = useState();

  const mobileno = (event) =>{
    setmobile(event.target.value);
  }
  const confirms = () =>{
    let randomno = '';
    let a = 'ABCDEFGHIJKLMNOPQURSUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i<a.length;i++){
      randomno += a.charAt(Math.floor(Math.random() * a.length));
    }
    let p =  /^\d{10}$/;
    if(mobile.match(p)){
      return(
        alert(`Thanks for Using 
        Your Booking No. is ${randomno}`)
      )
    }
      else {
        alert('Invalid Mobile No');
    }
  }

const card = (val, key) =>{


    return(
        <>
        <div className="card_inner" style={{backgroundImage:`url(${val.reference})` , backgroundSize:'cover', backgroundPosition: 'center'}}>
            <h2>{val.key}</h2>
            <h1>{val.title}</h1>
            <p className="p1">{val.treks}<sub>Treks</sub></p>
            <p className="p2">{val.days}<sub>D/N</sub></p>
            <p className='p3'>{val.rupee}<sub>RS</sub></p>
            <button type='button'  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Apply Now</button>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Pay With Paytm<AccountBalanceWalletIcon/></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type='text' placeholder='Paytm Mobile No.'  onChange={mobileno}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={confirms}>Confirm</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}


return(
<>
<div className="plan">
    <div className="heading">
<h1>Our Plans</h1>
</div>
<div className="card">
{
    DataWithAll.map(card)
}
</div>
</div>
</> 
      )
}

export default OurPlans;