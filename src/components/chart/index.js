import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

const ChartComponent = () => {
  return (
    <div className="bg-success">
      <Chart options={options} series={series} type="bar" width="500" />
    </div>
  );
};

export default ChartComponent;
