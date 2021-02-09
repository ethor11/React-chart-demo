import React from "react";
import { Bar } from "react-chartjs-2";

const test = [
  "&#x27;2020-12-24&#x27;",
  "&#x27;2020-12-25&#x27;",
  "&#x27;2020-12-26&#x27;",
  "&#x27;2020-12-27&#x27;",
  "&#x27;2020-12-28&#x27;",
  "&#x27;2020-12-29&#x27;",
  "&#x27;2020-12-30&#x27;",
  "&#x27;2020-12-31&#x27;"
];

var i;
dates_tmp = [];
for (i = 0; i < test.length; i++) {
  dates_tmp.push(test[i].split(";")[1].split("&")[0]);
}

const dates = dates_tmp;

const score = [-2, -40, 81, -31, 34, -35, -24, -30];
const day_7_average = [0, -6, 3, -2, 5, 5, 0, -7];

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)"
};

const colours = score.map((value) =>
  value < 0 ? "rgb(255, 99, 132)" : "rgb(75, 192, 192)"
);

const state = {
  labels: dates,
  datasets: [
    {
      label: "7 Day Average",
      type: "line",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgb(201, 203, 207)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 0.5,
      data: day_7_average
    },
    {
      label: "Score",
      backgroundColor: colours,
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 0.5,
      data: score
    }
  ]
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Social Sentiment",
              fontSize: 15
            },
            responsive: true,
            tooltips: {
              mode: "index",
              intersect: false
            },
            legend: {
              display: true,
              position: "top"
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
