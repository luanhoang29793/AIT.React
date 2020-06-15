import React from 'react';
import {
    
   
    useLocation, useParams
  } from "react-router-dom";
function NotFound () {
    let location = useLocation();
    let a = useParams()
    console.log(location)
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
}

export default NotFound;
