import './ViewAnalytics.css';

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import AllPlayerFeed from '../../Components/AllPlayerFeed';
import TopPlayerFeed from '../../Components/TopPlayerFeed';
import Chart from '../../Components/Chart';
import * as d3 from 'd3';
import excel from '../../excel/espn_Players.csv';

var selectedPosition;
var playerLabels;
var projectionData;

d3.csv(excel).then(makeChart);

function makeChart(players) {
  playerLabels = players.map(function (d) {
    return d.player_name;
  });
  projectionData = players.map(function (d) {
    return d.projection;
  });
}

class ViewAnalytics extends Component {
  selectedPosition = 'All';

  onClick() {
    TopPlayerFeed.change();
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
    //Ajax calls here
    this.setState({
      chartData: {
        labels: playerLabels,
        datasets: [
          {
            label: 'FPTS',
            data: projectionData,
            fill: false,
          },
        ],
      },
    });
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
