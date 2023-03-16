import React, { useState } from "react";
import "./feedbackForm.css";

const FeedbackForm = () => {
    const[modal,setModal]=useState(false);
    const [data,setData]=useState({
        name:"",
        email:"",
        productpurchasingexperience:"",
        customerreview:""
    });


const handleChange=(e)=>{
    const{name,value}=e.target;
    // console.log(value);
    setData({...data,[name]:value});
};

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
}




  return (
    <>
      <div className="form_design">
        <h1 className="heading">Feedback Form</h1>
        {!modal &&
                <button className="togglebtn" onClick={()=>setModal((value)=>!value)}>
                Toggle Feedback </button>
        }

        <div className="feedback" onSubmit={handleSubmit}>
            {modal &&
                      <form className="form">
                        <button className="close-btn" onClick={()=>setModal((value)=>!value)}>X</button>
                      <div className="nameinput">
                          <input placeholder="Name" name="Name" onChange={(e)=>handleChange(e)}/>
                      </div>
                      <div className="emailinput">
                          <input placeholder="Email" name="Email" onChange={(e)=>handleChange(e)}/>
                      </div>
                      <div className="experienceinput">
                          <input placeholder="Purchasing Experience" name="Product Purchasing Experience" onChange={(e)=>handleChange(e)}/>
                      </div>
                      <div className="reviewinput">
                          <input placeholder="Write a Review" name="Customer Review" onChange={(e)=>handleChange(e)}/>
                      </div>
                      <button className="submit" onClick={handleSubmit}>Submit Feedback</button>
                    </form>
            }

        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
