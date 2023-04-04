
import './App.css';
import Home from "./components/home/Home";
import {  Routes, Route } from 'react-router-dom';
import TourDetails from './components/tourDetalis/TourDetails';

const travel= require("./data/db.json")

function App() {
  return ( 
    
    <> 
   
    

   <Routes>
       <Route exact path="/" element={<Home data= {travel} />}/>
 
     
      <Route path={`/city/:id`} element= {<TourDetails data={travel} />} >
     </Route>
   </Routes>
   
    </>
  
  );
}

export default App;
