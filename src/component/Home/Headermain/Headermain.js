import React from 'react';
import chari from '../../../images/chair.png';

const Headermain = () => {
    return (
       <main style={{height:'600px'}} className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum obcaecati magnam omnis eius dolor cum.</p>           
            <div className="btn btn-primary">GET APPOINTMENT</div>
           </div>
           <div className="col-md-6">
           <img src={chari} alt="" className="img-fluid"/>
            </div>
          

       </main>
    );
};

export default Headermain;