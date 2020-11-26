import './ViewAnalytics.css';

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import AllPlayerFeed from '../../Components/AllPlayerFeed';
import TopPlayerFeed from '../../Components/TopPlayerFeed';
import Chart from '../../Components/Chart';

var selectedPosition;

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
        labels: [
          'Kyler Murray',
          'Patrick Mahomes',
          'Russell Wilson',
          'Josh Allen',
        ],
        datasets: [
          {
            label: 'FPTS',
            data: ['288.66', '260.1', '258.14', '241.94'],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
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
