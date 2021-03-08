import React, { useState } from 'react';

const Contact = () => {
    const[cData,uData] = useState({
        fullname:'',
        email:'',
        phone:'',
        message:''
    });
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${cData.fullname} My phone number is ${cData.phone} My email is ${cData.email} my message is ${cData.message}`);

    };
    const inputEvent=(event)=>{
        const { name , value} = event.target.value;
        uData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };

        })
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={uData.fullname} onChange="inputEvent" placeholder="Enter your name here" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={uData.email} onChange="inputEvent" placeholder="Enter email address" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={uData.phone} onChange="inputEvent" placeholder="Enter your mobile number " />
                            </div>
                            
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={uData.message} name="message"onChange="inputEvent" placeholder="Any message for us"></textarea>
                            </div>
                            <button type="button" class="btn btn-primary" onClick={formSubmit}>submit form</button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );

}
export default Contact;