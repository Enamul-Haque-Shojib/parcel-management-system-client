import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';
import { FaBox, FaTruck, FaMobileAlt } from 'react-icons/fa';

const Stats = () => {
  const [statsNumber, setStatsNumber] = useState({
    numberBooked: 0,
    numberDelivered: 0,
    numberUsingApp: 0,
  });
  const axiosInstance = useAxiosSecure();

  useEffect(() => {
    axiosInstance
      .get('statistics/number-booked-delvered-usingapp')
      .then((res) => {
        setStatsNumber(res.data.data);
      });
  }, []);

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-gray-100 shadow-md">
        {/* Parcels Booked */}
        <div className="stat flex flex-col items-center p-6 bg-gradient-to-b from-white to-blue-50 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <FaBox className="text-blue-600 text-5xl mb-4 animate-pulse" />
          <div className="stat-title text-xl font-semibold text-gray-700 text-center">
            Parcels Booked
          </div>
          <div className="stat-value text-4xl font-bold text-blue-700 text-center mt-2">
            {statsNumber.numberBooked}+
          </div>
          <div className="stat-desc text-sm text-gray-500 text-center mt-1">
            Total bookings made
          </div>
        </div>

        {/* Parcels Delivered */}
        <div className="stat flex flex-col items-center p-6 bg-gradient-to-b from-white to-green-50 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <FaTruck className="text-green-600 text-5xl mb-4 animate-bounce" />
          <div className="stat-title text-xl font-semibold text-gray-700 text-center">
            Parcels Delivered
          </div>
          <div className="stat-value text-4xl font-bold text-green-700 text-center mt-2">
            {statsNumber.numberDelivered}+
          </div>
          <div className="stat-desc text-sm text-gray-500 text-center mt-1">
            Successfully delivered
          </div>
        </div>

        {/* Using Our App */}
        <div className="stat flex flex-col items-center p-6 bg-gradient-to-b from-white to-yellow-50 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <FaMobileAlt className="text-yellow-600 text-5xl mb-4 animate-pulse" />
          <div className="stat-title text-xl font-semibold text-gray-700 text-center">
            Using Our App
          </div>
          <div className="stat-value text-4xl font-bold text-yellow-700 text-center mt-2">
            {statsNumber.numberUsingApp}+
          </div>
          <div className="stat-desc text-sm text-gray-500 text-center mt-1">
            Active app users
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
