import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Bollywood from './component/Bollywood';
import Home from "./component/Home";
import Technology from './component/Technology';
import Data from "./component/Data";

function App() {
  return (
    <Data>
<React.Fragment>
   <BrowserRouter>
   <Home/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/bollywood' element={<Bollywood/>}/>
   <Route path='/technology' element={<Technology/>}/>
   </Routes>
   </BrowserRouter>
</React.Fragment>
</Data>
  );
}

export default App;
