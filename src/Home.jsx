import React from 'react';
import Navbar from './Navbar';
import web from '../src/Images/c.png';
import Common from './Common';
import {NavLink} from './'
const Home=()=>{
    return(
        <>
        <Common 
            name='Welcome to our home page '
            imgsrc={web}
            visit='/service'
            btname='Get Started'
        />
        </>
    );

}
export default Home;