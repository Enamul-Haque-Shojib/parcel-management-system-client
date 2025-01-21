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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/statistics/chart`).then((res) => {
      setBarChartDataDB(res?.data?.data?.barChart || { booked: [], bookingDate: [] });
      setLineChartDataDB(
        res?.data?.data?.lineChart || { booked: [], delivered: [], bookingDates: [] }
      );
      setIsLoading(false);
    });
  }, []);

  const barChartData = {
    series: [
      {
        name: "Bookings",
        data: barChartDataDB.booked,
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
        categories: barChartDataDB.bookingDate,
      },
      title: {
        text: "Bookings by Date",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      grid: {
        borderColor: "#e7e7e7",
      },
      tooltip: {
        theme: "light",
      },
    },
  };

  const lineChartData = {
    series: [
      {
        name: "Booked Parcels",
        data: lineChartDataDB.booked,
      },
      {
        name: "Delivered Parcels",
        data: lineChartDataDB.delivered,
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
        categories: lineChartDataDB.bookingDates,
      },
      title: {
        text: "Booked vs Delivered Parcels",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
      tooltip: {
        theme: "light",
      },
      grid: {
        borderColor: "#e7e7e7",
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Statistics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Bookings Overview</h2>
          {isLoading ? (
            <div className="h-80 bg-gray-200 animate-pulse rounded-lg"></div>
          ) : barChartDataDB.booked.length > 0 && barChartDataDB.bookingDate.length > 0 ? (
            <Chart
              options={barChartData.options}
              series={barChartData.series}
              type="bar"
              height={350}
            />
          ) : (
            <p className="text-gray-500 text-center">No data available for the bar chart.</p>
          )}
        </div>

        {/* Line Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Parcel Performance</h2>
          {isLoading ? (
            <div className="h-80 bg-gray-200 animate-pulse rounded-lg"></div>
          ) : lineChartDataDB.booked.length > 0 &&
            lineChartDataDB.delivered.length > 0 &&
            lineChartDataDB.bookingDates.length > 0 ? (
            <Chart
              options={lineChartData.options}
              series={lineChartData.series}
              type="line"
              height={350}
            />
          ) : (
            <p className="text-gray-500 text-center">No data available for the line chart.</p>
          )}
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg text-center shadow-sm">
            <p className="text-xl font-bold text-gray-800">
              {barChartDataDB.booked.reduce((a, b) => a + b, 0)}
            </p>
            <p className="text-gray-500">Total Bookings</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center shadow-sm">
            <p className="text-xl font-bold text-gray-800">
              {lineChartDataDB.delivered.reduce((a, b) => a + b, 0)}
            </p>
            <p className="text-gray-500">Total Deliveries</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center shadow-sm">
            <p className="text-xl font-bold text-gray-800">
              {lineChartDataDB.bookingDates.length}
            </p>
            <p className="text-gray-500">Total Booking Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
