import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () =>{
    return(
        <>
        <div className="home_container">
            <div className="home_container1">
                <div>
                <h1>India's Most Famous Advantureous Trips</h1>
                <br/>
                <h3>To Feel The Beauty Of Nature</h3>
                <br/>
                <p className='p1'>Over the years, <b>adventure tourism</b> has flourished in india. the country is now home to many adrenaline-pumping sports and pulsating 
                outdoor activities . you can select from an array of sports and sports to suit your preference across the country and have the trip of a lifetime. </p>
                <p className='p2'>Check Out The Destinations</p>
               <p className='p3'><NavLink to="/destination" className='link'>Watch 👁️‍🗨️</NavLink></p>
            </div>
            </div>
            <br/>
        </div>
        </>
    )
}

export default Home;

