import React, { useState } from 'react';
import Data from './Data';


const OurDestination = () =>{
    const [inputvalue, setinputvalue] = useState("");
    const values = (event) =>{
        setinputvalue(event.target.value);
    }
    return(
        <>
        <div className='destination'>
            <div>
        <input type='search' onChange={values} placeholder='Search The Destination For Adventure' />
        </div>
        {
            Data.filter((val) =>{
                if(inputvalue == ""){
                    return val;
                }
                else if(val.city.toLowerCase().includes(inputvalue.toLowerCase())){
                    return val;
                }  
            }).map((val,key) =>{
                return(
                    <>
                    <div className="card" key={key}>
                        <img src={val.reference} alt={val.title} />
                        <hr/>
                        <h3>{val.title} , {val.city}</h3>

                    </div>
                    </>
                )
            })
        }
        </div>
        
        </>

    )
}

export default OurDestination;