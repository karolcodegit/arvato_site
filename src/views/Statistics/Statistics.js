import React from "react";
import PieChart from "../../components/Common/PieChart/PieChart";
import Box from "../../components/Box/Box";
import Title from "../../components/Common/Title/Title";
import {
  ComputerIcon,
  PrintLabelIcon,
} from "../../components/Common/Icons/Icons";
import Card from "../../components/Common/Card/Card";
import IssuesChart from "../../components/Common/IssuesChart/IssuesChart";

const Statistics = () => {
  const report_data = [
    { label: "Open", value: 12 },
    { label: "Process", value: 19 },
    { label: "Closed", value: 3 },
  ];

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "# of Issues Reported",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <div className="w-full">
        <div className="flex w-full gap-5 mb-8">
          <div className="flex-1">
            <Card
              bg="bg-gray-400"
              title="Zgłoszenia"
              number="12"
              icon={<ComputerIcon />}
            />
          </div>
          <div className="flex-1">
            <Card
              bg="bg-gray-400"
              title="New"
              number="7"
              icon={<ComputerIcon />}
            />
          </div>
          <div className="flex-1">
            <Card
              bg="bg-gray-400"
              title="Rozwiązania"
              number="12"
              icon={<ComputerIcon />}
            />
          </div>
          <div className="flex-1">
            <Card
              bg="bg-gray-400"
              title="Zamknięte"
              number="12"
              icon={<ComputerIcon />}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-1/3 h-2/4">
          <Box>
            <PieChart data={report_data} />
          </Box>
        </div>
        <div className="w-2/3 h-2/4">
          <Box col>
            <Title tag="h3">Kategorie</Title>
            <div className="flex gap-x-3 mb-4  flex-wrap">
              <div className="flex-1">
                <Card
                  bg="bg-pink-300"
                  title="Komputery"
                  number="7"
                  icon={<ComputerIcon />}
                />
              </div>

              <div className="flex-1">
                <Card
                  bg="bg-blue-300"
                  title="Monitor"
                  number="9"
                  icon={<ComputerIcon />}
                />
              </div>

              <div className="flex-1">
                <Card
                  bg="bg-green-300"
                  title="Drukarka"
                  number="12"
                  icon={<PrintLabelIcon />}
                />
              </div>
            </div>
            <div className="flex gap-3 mb-4 flex-wrap">
              <div className="flex-1">
                <Card
                  bg="bg-yellow-300"
                  title="Telefon"
                  number="3"
                  icon={<ComputerIcon />}
                />
              </div>

              <div className="flex-1">
                <Card
                  bg="bg-indigo-300"
                  title="Licencja"
                  number="43"
                  icon={<ComputerIcon />}
                />
              </div>

              <div className="flex-1">
                <Card
                  bg="bg-purple-300"
                  title="Internet"
                  number="1"
                  icon={<ComputerIcon />}
                />
              </div>
            </div>
            <div className="flex gap-3 mb-4 flex-wrap">
              <div className="flex-1">
                <Card
                  bg="bg-red-300"
                  title="Inne"
                  number="6"
                  icon={<ComputerIcon />}
                />
              </div>
            </div>
          </Box>
        </div>
      </div>
      <Box col>
        <Title tag="h3">Reported</Title>
        <IssuesChart chartData={chartData} />
      </Box>
    </>
  );
};

export default Statistics;
