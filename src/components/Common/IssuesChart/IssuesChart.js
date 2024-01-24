import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { BarController, BarElement, CategoryScale, Chart as ChartJS, LinearScale } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarController, BarElement)

const IssuesChart = ({ chartData, options, ...props }) => {
    return (
        <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    )
  };

export default IssuesChart;