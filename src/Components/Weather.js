import React from 'react';

import './Weather.css';

export default function Weather() {
    return(
       <div className="Weather">
           <a href="https://www.shecodes.io/" target="_blank" rel="noopener noreferrer">
               <img src={require("../images/logo.png" )}  className="logo"  alt="SheCodes Logo" /></a>

           <form>
               <div className="row">
                   <div className="col-9 ">
                       <input type="search" placeholder="Enter a city ..." className="form-control search-input" />
                   </div>
                   <div className="col-3 p-0">
                       <input type="submit" className="btn btn-success w-100" value="Search" />
                   </div>
               </div>
           </form>
       </div>
    );
}