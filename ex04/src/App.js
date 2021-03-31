import React, { Component } from "react";

class App extends Component {
  setLocalStorage() {
    
    localStorage.setItem("Arena", "Selection Month");
     }

  getLocalStorage() {
    
    const myLocalStorageData = localStorage.getItem("Arena");
    const arr=[];
   arr.push( myLocalStorageData );
   console.log(arr);
   return arr;
  }   
 
  
  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Set  Local Storage</button>
        <button onClick={this.getLocalStorage}>Get Local Storage</button>
     </div>
    );
  }
}

export default App;