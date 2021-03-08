import React from 'react';
import Navbar from './Navbar';

import {NavLink} from 'react-router-dom';
const Common=(props)=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid " >
            <div className="row">
                <div className="col-10 mx-auto" style={{marginTop:'150px'}}>
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.name} <strong style={{color:'purple'}}>CSP</strong></h1>
                    <h2 className="my-3">we are the team who are always ready to solve your problems</h2>
                    <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started ">{props.btname}</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src = {props.imgsrc} className="img-fluid animated" alt="home image" style={{width:"250px",height:"250px",marginLeft:'200px'}}/>

                </div>
                </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );

}
export default Common;