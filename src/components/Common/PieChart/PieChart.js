import React, { useEffect, useRef, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';



const PieChart = ({ data }) => {
    // const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
      labels: [],
      datasets: [{ data: [], backgroundColor: [], hoverBackgroundColor: [] }]
    });
  
    useEffect(() => {
      if (data) {
        setChartData({
          labels: data.map(item => item.label),
          datasets: [
            {
              data: data.map(item => item.value),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
          ]
        });
      }
  
    //   return () => {
    //     if (chartRef.current) {
    //       chartRef.current.destroy();
    //     }
    //   };
    }, [data]);

    const options = {
        plugins: {
            datalabels: {
              color: '#000',
              formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                  sum += data;
                });
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false
      };
    ChartJS.register(ArcElement, Tooltip, Legend,);
  
    return <Doughnut  data={chartData} options={options}/>;
  };
  
  export default PieChart;