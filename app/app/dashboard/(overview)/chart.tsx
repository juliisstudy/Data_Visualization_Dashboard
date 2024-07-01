"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

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
      text: "Chart.js Bar Chart",
      position: "bottom" as const,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function ChartOBj({ nums }: { nums: number[] }) {
  const data = {
    labels,
    datasets: [
      {
        label: "New players",
        data: nums,
        backgroundColor: "rgba(252, 87,38, 0.5)",
      },
      {
        label: "Subscribers",
        data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
        backgroundColor: "rgba(6, 224,191, 0.5)",
      },
    ],
  };
  console.log(data);
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}
