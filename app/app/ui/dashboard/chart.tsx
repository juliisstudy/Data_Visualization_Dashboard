"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
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
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "New Players vs Subscribers",
      position: "bottom" as const,
    },
  },
};

export function ChartOBj({
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
        label: "New players",
        data: nums,
        backgroundColor: "rgba(6, 224,191, 0.5)",
      },
      {
        label: "Subscribers",
        data: numsSecond,
        backgroundColor: "rgba(252, 87,38, 0.5)",
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}
