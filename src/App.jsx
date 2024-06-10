import React, { useEffect } from "react";
import "./App.css";



function App() {
  useEffect(() => {
    tg.ready();
  }, []);



  return (
    <div className="App">
      <div>work</div>
   
    </div>
  );
}

export default App;
