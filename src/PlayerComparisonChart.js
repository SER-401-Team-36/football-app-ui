import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: ["2018", "2019", "2020"],
  datasets: [
    {
      label: "FFP",
      backgroundColor: "rgb(110, 94, 254)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80],
    },
  ],
};

const PlayerComparisonChart = () => {
  return (
    <Bar
      data={state}
      options={{
        title: {
          display: true,
          text: "Player Stats",
          fontSize: 30,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />
  );
};

export default PlayerComparisonChart;
