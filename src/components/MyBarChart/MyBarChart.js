import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const MyBarChart = () => {
  const data01 = [
    {
      name: "Group A",
      value: 4,
    },
    {
      name: "Group B",
      value: 3,
    },
    {
      name: "Group C",
      value: 3,
    },
    {
      name: "Group D",
      value: 2,
    },
    {
      name: "Group E",
      value: 2,
    },
    {
      name: "Group F",
      value: 1,
    },
  ];
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
      <Tooltip />
    </PieChart>
  );
};

export default MyBarChart;
