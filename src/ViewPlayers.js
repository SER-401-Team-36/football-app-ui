import React from "react";
import './ViewPlayers.css';
import {Button} from 'react-bootstrap';
import TopPlayerFeed from "./TopPlayerFeed";
import AllPlayerFeed from "./AllPlayerFeed";

class ViewPlayers extends React.Component {

  constructor(props) {
    super(props);
    this.state = { message: "All Positions"}
  }

  updateContentAll = () => {
    this.setState({ message: "All Positions"});
  }

  updateContentQB = () => {
    this.setState({ message: "Quarterbacks"});
  }

  updateContentRB = () => {
    this.setState({ message: "Running Backs"});
  }

  updateContentTE = () => {
    this.setState({ message: "Tight Ends"});
  }

  render() {
  return ( 
    <div className="App">
      <header className="App-header">
        <h1 id="Players">Players</h1>

        <div id="Positions">
        <Button className="Buttons" onClick={this.updateContentAll}>All</Button>
          <Button className="Buttons" onClick={this.updateContentQB}>QB</Button>
          <Button className="Buttons" onClick={this.updateContentRB}>RB</Button>
          <Button className="Buttons" onClick={this.updateContentTE}>TE</Button>
        </div>
      </header>

      <main id="ViewPage">
        <h3 className="PositionsHeader">{this.state.message}</h3>
          <div id="Analysis">
            <AllPlayerFeed />
          </div>

          <div className="HotPicks">
            <TopPlayerFeed />
          </div>
      </main>

      

    </div>
  );
}
}

export default ViewPlayers;
