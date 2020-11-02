import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App";
import TopPlayerFeed from "./TopPlayerFeed";

function App() {
    return (
        <div classname="app">
            <Navbar />
            <TopPlayerFeed />
        </div>
    );
}


export default App;