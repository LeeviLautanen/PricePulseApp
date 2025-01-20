import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Hours)",
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#FFFFFF",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.5)",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (c / kWh)",
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#FFFFFF",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.5)",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Dataset 1",
        data: props.data,
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: "rgb(29, 116, 0)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Chart;
