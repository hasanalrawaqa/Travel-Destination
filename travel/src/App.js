

import './App.css';
import Home from "./components/home/Home";
const travel= require("./data/db.json")

function App() {
  return ( 
    
    <> 
    < Home data= {travel} />
   
    </>
  
  );
}

export default App;
