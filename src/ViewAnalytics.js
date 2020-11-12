import React from "react";
import './ViewAnalytics.css';
import {Button} from 'react-bootstrap';
import TopPlayerFeed from "./TopPlayerFeed";


class ViewAnalytics extends React.Component {

  onClick() {
    TopPlayerFeed.change();
  }
  
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
        <h1 id="Analytics">Analytics</h1>

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

          </div>

          <div className="HotPicks">
            <TopPlayerFeed positionFilter={"All Positions"}/>
          </div>
      </main>
    </div>
  );
}
}

export default ViewAnalytics;
