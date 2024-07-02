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
      text: "User Growth",
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

export function UserGrowth({
  nums,
  labels,
  numsSecond,
}: {
  nums: number[];
  labels: string[];
  numsSecond: number[];
}) {
  const data = {
    labels,
    datasets: [
      {
        label: "New Players",
        data: nums,
        borderColor: "rgba(6, 224,191, 0.5)",
        backgroundColor: "rgba(6, 224,191, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Subscribers",
        data: numsSecond,
        borderColor: "rgba(252, 87,38, 0.5)",
        backgroundColor: "rgba(252, 87,38, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
