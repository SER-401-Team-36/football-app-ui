import React from "react";
import "./App.css";
import TopPlayerFeed from "./TopPlayerFeed";
import AllPlayerFeed from "./AllPlayerFeed";

function App() {
    return (
        
        <div className="app"> 
            <AllPlayerFeed />
            <TopPlayerFeed />  
        </div>
    );
}


export default App;