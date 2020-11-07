import React from "react";
import Header from './Header';
import TopPlayerFeed from "./TopPlayerFeed";
import AllPlayerFeed from "./AllPlayerFeed";

function App() {
    return (
        <div classname="app">
            <Header />
            <AllPlayerFeed />
            <TopPlayerFeed /> 
        </div>
    );
}


export default App;