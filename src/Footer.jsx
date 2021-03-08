import React from 'react';

const Footer=()=>{
    const year = new Date().getFullYear();
return(
    <>
    <footer className="text-center">
        <p ><strong>©</strong> {year} Chauhan Spare Parts. All Rights Reserved | T&C Apply</p>
    </footer>
    </>
);
}
export default Footer;