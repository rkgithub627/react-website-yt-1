import React from "react";
import '../../App.css';


export const client = 
function client() {
    return (
      <div className='App'>
       <h1>CRUD APPLICATION</h1>
    
    <div className="form">
        <label> Movie Name</label> 
      <input type="text" name="movieName"/>
      <label> Review</label> 
      <input type="text" name="review" />

      <button>Submit</button>
       </div>
     </div>
    
    );
}
export default App