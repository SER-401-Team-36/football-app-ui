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
var playerPositionAll;

var playerLabelsQB;
var projectionDataQB;
var playerPositionQB;

var chartData;

d3.csv(all).then(makeChartAll);
d3.csv(QB).then(makeChartQB);

function makeChartAll(players) {
  playerLabelsAll = players.map(function (d) {
    return d.player_name;
  });
  projectionDataAll = players.map(function (d) {
    return d.projection;
  });
  playerPositionAll = players.map(function (d) {
    return d.pos;
  });
}

function makeChartQB(players) {
  playerLabelsQB = players.map(function (d) {
    return d.player_name;
  });
  projectionDataQB = players.map(function (d) {
    return d.projection;
  });
  playerPositionQB = players.map(function (d) {
    return d.pos;
  });
}

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
    d3.csv(QB).then(makeChartQB);
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

  constructor() {
    super();
    this.state = {
      chartData: {},
      message: 'All Positions',
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    if ((selectedPosition = 'All')) {
      this.setState({
        chartData: {
          labels: playerLabelsAll,
          datasets: [
            {
              label: 'FPTS',
              data: projectionDataAll,
              fill: false,
              showLine: false,
              showGrid: false,
              backgroundColor: 'rgb(128,0,0)',
            },
          ],
          showLine: false,
          showGrid: false,
        },
      });
    } else if ((selectedPosition = 'QB')) {
      this.setState({
        chartData: {
          labels: playerLabelsQB,
          datasets: [
            {
              label: 'FPTS',
              data: projectionDataQB,
              fill: false,
              showLine: false,
              showGrid: false,
              backgroundColor: 'rgb(128,0,0)',
            },
          ],
          showLine: false,
          showGrid: false,
        },
      });
    }
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
          </div>
        </header>

        <main id="ViewPage">
          <div id="Analysis">
            <AllPlayerFeed />

            <div id="Chart1">
              <Chart
                chartData={this.state.chartData}
                position={selectedPosition}
              />
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
