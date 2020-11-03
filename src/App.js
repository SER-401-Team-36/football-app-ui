import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App";
import TopPlayerFeed from "./TopPlayerFeed";
import ViewPlayers from "./ViewPlayers";

function App() {
    return (
        <div classname="app">
            <Navbar />
            <ViewPlayers />
            {/*<TopPlayerFeed />*/}
        </div>
    );
}


export default App;