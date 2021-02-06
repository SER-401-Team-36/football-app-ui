import './ViewAnalytics.css';

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TopPlayerFeed from '../../Components/TopPlayerFeed';
import Chart from '../../Components/Chart';

var selectedPosition;

class ViewAnalytics extends Component {
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
        <div className="analytics__background">
          <header className="analytics__header">
            <div id="analytics__positions">
              <Button
                className="analytics__positions__btn"
                onClick={this.updateContentAll}
              >
                All
              </Button>
              <br></br>
              <Button
                className="analytics__positions__btn"
                onClick={this.updateContentQB}
              >
                QB
              </Button>
              <br></br>
              <Button
                className="analytics__positions__btn"
                onClick={this.updateContentRB}
              >
                RB
              </Button>
              <br></br>
              <Button
                className="analytics__positions__btn"
                onClick={this.updateContentTE}
              >
                TE
              </Button>
              <br></br>
              <Button
                className="analytics__positions__btn"
                onClick={this.updateContentWR}
              >
                WR
              </Button>
              <br></br>
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
          </main>
        </div>
      </div>
    );
  }
}

export default ViewAnalytics;
