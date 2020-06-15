import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Views from './View/View'
import Index1 from './index/index'
import Notfound from'./Notfound/notfound'


function App() {
  return (

    <div>
      <BrowserRouter>
      <Route exact path= "/" component={Index1}/>
 
      <Route  path ="/Views/:id" component = { Views}  />
      </BrowserRouter>
    </div>
  );
}

export default App;
