import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const Top3DeliverMen = () => {
  const [topDeliverMen, setTopDeliverMen] = useState([]);
  const axiosInstance = useAxiosSecure();

  useEffect(() => {
    axiosInstance
      .get("http://localhost:5000/api/statistics/top-deliver-men")
      .then((res) => {
        setTopDeliverMen(res.data.data);
      });
  }, []);

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-12">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Top 3 Delivery Heroes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topDeliverMen.map((man, index) => (
          <Card
            key={index}
            className="group w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-200"
          >
            <CardHeader className="p-4">
              <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-md">
                <img
                  src={man.image}
                  alt={man.name}
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
              <CardTitle className="text-xl font-bold mt-4 text-gray-700">
                {man.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-blue-600">
                  Delivered: <span className="font-bold">{man.delivered}</span>
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Rating: {man.rating} ★
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Top3DeliverMen;
