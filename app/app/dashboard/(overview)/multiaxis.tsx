"use client";
import React from "react";
import {
  Chart as ChartJS2,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS2.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,

  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
      position: "bottom" as const,
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgba(252, 87,38, 0.5)",
      backgroundColor: "rgba(252, 87,38, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgba(6, 224,191, 0.5)",
      backgroundColor: "rgba(6, 224,191, 0.5)",
      yAxisID: "y1",
    },
  ],
};

export function UserGrowth() {
  return <Line options={options} data={data} />;
}
