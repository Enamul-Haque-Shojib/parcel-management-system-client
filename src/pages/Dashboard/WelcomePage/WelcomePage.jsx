import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Chart from "react-apexcharts";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useAuth from "@/hooks/useAuth";
const WelcomePage = () => {
  const axiosInstance = useAxiosSecure();
  const {role,user} = useAuth();
  const {displayName, email, photoURL} = user;
  // console.log(user, role)
  
      const[dashboardData, setDashboardData] = useState({});
      
      const{onTheWay, delivered, pending} = dashboardData;
      console.log(onTheWay);
      useEffect(() => {
      
          axiosInstance.post(
            `/statistics/dashboard-auth`,
            {role, email},
           
          ).then(res => {
            setDashboardData(res.data.data);
           
         })
        
          
       
      },[]);
  

    const pieChartOptions = {
      labels: ["Delivered", "Pending", "On the Way"],
    };
    const pieChartSeries = [delivered, pending, onTheWay];
  
    const users = [
      { name: "John Doe", image: "https://via.placeholder.com/40" },
      { name: "Jane Smith", image: "https://via.placeholder.com/40" },
    ];
  
    const deliveryMen = [
      { name: "Mike Johnson", image: "https://via.placeholder.com/40" },
      { name: "Chris Lee", image: "https://via.placeholder.com/40" },
    ];
  
    return (
      <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* Profile Section */}
        
        <Card className="col-span-1 flex items-center p-4">
          <Avatar className="w-16 h-16">
            <img src={photoURL} alt="User" />
          </Avatar>
          <div className="ml-4">
            <h2 className="text-lg font-bold">Welcome, {displayName}!</h2>
            <p className="text-sm text-gray-500">{email}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </Card>
        
        {/* Pie Chart */}
        <Card className="col-span-1">
          <CardContent>
            <Chart options={pieChartOptions} series={pieChartSeries} type="pie" height={250} />
          </CardContent>
        </Card>

         {/* Delivery Stats */}
         <Card className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-around p-4">
          <div className="text-center">
            <h4 className="text-xl font-bold">{delivered}</h4>
            <p className="text-gray-500">Delivered</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">{pending}</h4>
            <p className="text-gray-500">Pending</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">{onTheWay}</h4>
            <p className="text-gray-500">On the Way</p>
          </div>
        </Card>
  
        {/* User List */}
        <Card className="col-span-1">
          <CardContent>
            <h3 className="font-semibold mb-2">Users</h3>
            {users.map((user, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <Avatar className="w-10 h-10">
                  <img src={user.image} alt={user.name} />
                </Avatar>
                <p>{user.name}</p>
              </div>
            ))}
          </CardContent>
        </Card>
  
        {/* Delivery Men List */}
        <Card className="col-span-1">
          <CardContent>
            <h3 className="font-semibold mb-2">Delivery Men</h3>
            {deliveryMen.map((man, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <Avatar className="w-10 h-10">
                  <img src={man.image} alt={man.name} />
                </Avatar>
                <p>{man.name}</p>
              </div>
            ))}
          </CardContent>
        </Card>
  
       
      </div>
    );
 
};

export default WelcomePage;
