
import React, { useState } from "react";
import Chart from "react-apexcharts";
const Statistics = () => {
    const barChartData = {
        series: [
          {
            name: "Bookings",
            data: [10, 15, 7, 12,12, 20, 18, 25], // Example data
          },
        ],
        options: {
          chart: {
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Example categories
          },
          title: {
            text: "Bookings by Date",
            align: "center",
          },
        },
      };
    
      // Data for the line chart (Comparison of Booked vs Delivered Parcels)
      const lineChartData = {
        series: [
          {
            name: "Booked Parcels",
            data: [30, 40, 35, 50, 49, 60, 70, 72], // Example data
          },
          {
            name: "Delivered Parcels",
            data: [20, 30, 25, 45, 45, 40, 50, 52], // Example data
          },
        ],
        options: {
          chart: {
            type: "line",
            height: 350,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            categories: [2, 5, 7, 12, 15, 25, 28, 12], // Example categories
          },
          title: {
            text: "Booked vs Delivered Parcels",
            align: "center",
          },
        },
      };
    
      return (
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-6 text-center">Statistics</h1>
          <div className="flex gap-6">

          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <Chart
              options={barChartData.options}
              series={barChartData.series}
              type="bar"
              height={350}
            />
          </div>
    
        
          <div className="bg-white shadow rounded-lg p-6">
            <Chart
              options={lineChartData.options}
              series={lineChartData.series}
              type="line"
              height={350}
            />
          </div>
          </div>
        </div>
      );
};

export default Statistics;