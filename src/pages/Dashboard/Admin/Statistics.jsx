import useAxiosSecure from "@/hooks/useAxiosSecure";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Statistics = () => {
  const axiosInstance = useAxiosSecure();
  const [barChartDataDB, setBarChartDataDB] = useState({
    booked: [],
    bookingDate: [],
  });
  const [lineChartDataDB, setLineChartDataDB] = useState({
    booked: [],
    delivered: [],
    bookingDates: [],
  });

  useEffect(() => {
    axiosInstance.get(`/statistics/chart`).then((res) => {
      setBarChartDataDB(res?.data?.data?.barChart || { booked: [], bookingDate: [] });
      setLineChartDataDB(
        res?.data?.data?.lineChart || { booked: [], delivered: [], bookingDates: [] }
      );
    });
  }, []);

  const barChartData = {
    series: [
      {
        name: "Bookings",
        data: barChartDataDB.booked, // Ensure this is an array
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
        categories: barChartDataDB.bookingDate, // Ensure this is an array
      },
      title: {
        text: "Bookings by Date",
        align: "center",
      },
    },
  };

  const lineChartData = {
    series: [
      {
        name: "Booked Parcels",
        data: lineChartDataDB.booked, // Ensure this is an array
      },
      {
        name: "Delivered Parcels",
        data: lineChartDataDB.delivered, // Ensure this is an array
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
        categories: lineChartDataDB.bookingDates, // Ensure this is an array
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
          {barChartDataDB.booked.length > 0 && barChartDataDB.bookingDate.length > 0 ? (
            <Chart
              options={barChartData.options}
              series={barChartData.series}
              type="bar"
              height={350}
            />
          ) : (
            <p>Loading Bar Chart...</p>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          {lineChartDataDB.booked.length > 0 &&
          lineChartDataDB.delivered.length > 0 &&
          lineChartDataDB.bookingDates.length > 0 ? (
            <Chart
              options={lineChartData.options}
              series={lineChartData.series}
              type="line"
              height={350}
            />
          ) : (
            <p>Loading Line Chart...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
