import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const PieChart = ({ chartData }) => {

  const [labels, setLabels] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    setLabels(chartData.labels)
    setSeries(chartData.series)
  }, [chartData])

  return (
    <div>
      <Chart
        options={{
          labels
        }}
        series={series}
        type="pie"
        width="350px"
      />
    </div>
  );
};

export default PieChart;
