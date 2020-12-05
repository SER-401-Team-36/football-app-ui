import './ViewAnalytics.css';

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import AllPlayerFeed from '../../Components/AllPlayerFeed';
import TopPlayerFeed from '../../Components/TopPlayerFeed';
import Chart from '../../Components/Chart';
import * as d3 from 'd3';
import all from '../../excel/espn_Players.csv';
import QB from '../../excel/QB.csv';
import RB from '../../excel/RB.csv';
import TE from '../../excel/TE.csv';
import WR from '../../excel/WR.csv';
import D_ST from '../../excel/D_ST.csv';

var selectedPosition;
var playerLabelsAll;
var projectionDataAll;

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
      <div className="App">
        <header className="App-header">
          <h1 id="Analytics">Analytics</h1>

          <div id="Positions">
            <Button
              className="Buttons"
              onClick={this.updateContentAll}
            >
              All
            </Button>
            <Button
              className="Buttons"
              onClick={this.updateContentQB}
            >
              QB
            </Button>
            <Button
              className="Buttons"
              onClick={this.updateContentRB}
            >
              RB
            </Button>
            <Button
              className="Buttons"
              onClick={this.updateContentTE}
            >
              TE
            </Button>
            <Button
              className="Buttons"
              onClick={this.updateContentWR}
            >
              WR
            </Button>
            <Button
              className="Buttons"
              onClick={this.updateContentD_ST}
            >
              D_ST
            </Button>
          </div>
        </header>

        <main id="ViewPage">
          <div id="Analysis">
            <AllPlayerFeed />

            <div id="Chart1">
              <Chart position={selectedPosition} />
            </div>
          </div>

          <div className="HotPicks">
            <TopPlayerFeed />
          </div>
        </main>
      </div>
    );
  }
}

export default ViewAnalytics;
