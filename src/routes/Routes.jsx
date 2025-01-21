import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import {
    createBrowserRouter,
} from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import Statistics from "@/pages/Dashboard/Admin/Statistics";
import BookParcel from "@/pages/Dashboard/Customer/BookParcel";
import MyParcels from "@/pages/Dashboard/Customer/MyParcels";
import MyDeliveryList from "@/pages/Dashboard/DeliverMan/MyDeliveryList";

import MyReviews from "@/pages/Dashboard/DeliverMan/MyReviews";

import AllDeliveryMen from "@/pages/Dashboard/Admin/AllDeliveryMen";
import AllParcels from "@/pages/Dashboard/Admin/AllParcels";
import UpdateParcel from "@/components/Dashboard/UpdateParcel/UpdateParcel";

import AllUsers from "@/pages/Dashboard/Admin/AllUsers";
import WelcomePage from "@/pages/Dashboard/WelcomePage/WelcomePage";
import PrivateRoute from "./PrivateRoute";
import Profile from "@/pages/Dashboard/Customer/Profile";





export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <Home />,
          }
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    
   
    {
      path: '/dashboard',
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
        
          element: (
            <PrivateRoute>
              <WelcomePage />
             </PrivateRoute>
          ),
        },
        {
          path: 'statistics', 
          
          element:<PrivateRoute> <Statistics /></PrivateRoute>
          
        },
        {
          
          path: 'book-parcel',
          element: 
             <PrivateRoute>
              
                <BookParcel />
             
            </PrivateRoute>
          
        },
        {
          path: 'my-parcels',
          element: (
            <PrivateRoute>
                <MyParcels></MyParcels>
          </PrivateRoute>
          ),
        },
        {
          path: 'my-delivery-list',
          element: (
             <PrivateRoute>
                <MyDeliveryList />
            </PrivateRoute>
          ),
        },
        {
          path: 'profile',
          element: (
            <PrivateRoute>
              <Profile/>
             </PrivateRoute>
          ),
        },
        {
          path: 'my-reviews',
          element: (
            <PrivateRoute>
              <MyReviews />
          </PrivateRoute>
          ),
        },
        {
          path: 'all-users',
          element: (
            <PrivateRoute>
           
                <AllUsers />
         
           </PrivateRoute>
          ),
        },
        {
          path: 'all-delivery-men',
          element: (
           <PrivateRoute>
         
                <AllDeliveryMen />
      
            </PrivateRoute>
          ),
        },
        {
          path: 'all-parcels',
          element: (
             <PrivateRoute>
      
                <AllParcels />
        
            </PrivateRoute>
          ),
        },
        {
          path: 'my-parcels/update-parcel/:id',
          element: (
             <PrivateRoute>
      
                <UpdateParcel />
         
            </PrivateRoute>
            
          ),
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/parcels/${params.id}`)
        },
        {
          path: 'profile/:email',
          element: (
             <PrivateRoute>
      
                <Profile></Profile>
         
            </PrivateRoute>
            
          ),
        
       
        },
        
      ],
    },
  ]);