import './ViewAnalytics.css';

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TopPlayerFeed from '../../Components/TopPlayerFeed';
import Chart from '../../Components/Chart';

var selectedPosition;

class ViewAnalytics extends Component {
  selectedPosition = 'All';

  onClick() {
    TopPlayerFeed.change();
    Chart.update();
  }

  updateContentAll = () => {
    this.setState({ message: 'All Positions' });
    selectedPosition = 'All';
  };

  updateContentQB = () => {
    this.setState({ message: 'Quarterbacks' });
    selectedPosition = 'QB';
  };

  updateContentRB = () => {
    this.setState({ message: 'Running Backs' });
    selectedPosition = 'RB';
  };

  updateContentTE = () => {
    this.setState({ message: 'Tight Ends' });
    selectedPosition = 'TE';
  };

  updateContentWR = () => {
    this.setState({ message: 'Wide Receivers' });
    selectedPosition = 'WR';
  };

  updateContentD_ST = () => {
    this.setState({ message: 'Special Teams' });
    selectedPosition = 'D_ST';
  };

  constructor() {
    super();
    this.state = {
      chartData: {},
      message: 'All Positions',
    };
  }

  render() {  
    return (
      <div className="analytics">
        <header className="analytics__header">
          <h1 id="analytics__text">Analytics</h1>

          <div id="analytics__positions">
            <Button
              className="analytics__positions__btn"
              onClick={this.updateContentAll}
            >
              All
            </Button>
            <Button
              className="analytics__positions__btn"
              onClick={this.updateContentQB}
            >
              QB
            </Button>
            <Button
              className="analytics__positions__btn"
              onClick={this.updateContentRB}
            >
              RB
            </Button>
            <Button
              className="analytics__positions__btn"
              onClick={this.updateContentTE}
            >
              TE
            </Button>
            <Button
              className="analytics__positions__btn"
              onClick={this.updateContentWR}
            >
              WR
            </Button>
            <Button
              className="analytics__positions__btn"
              onClick={this.updateContentD_ST}
            >
              D_ST
            </Button>
          </div>
        </header>

        <main id="analytics_viewPage">
          <div id="analytics__analysis">
              <Chart position={selectedPosition} />
          </div>

          <div className="analytics__hotPicks">
            <TopPlayerFeed />
          </div>
        </main>
      </div>
    );
  }
}

export default ViewAnalytics;
