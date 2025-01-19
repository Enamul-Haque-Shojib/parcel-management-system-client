import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import {
    createBrowserRouter,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "@/layouts/DashboardLayout";
import Statistics from "@/pages/Dashboard/Admin/Statistics";
import BookParcel from "@/pages/Dashboard/Customer/BookParcel";
import MyParcels from "@/pages/Dashboard/Customer/MyParcels";
import MyDeliveryList from "@/pages/Dashboard/DeliverMan/MyDeliveryList";
import Profile from "@/pages/Dashboard/Common/Profile";
import MyReviews from "@/pages/Dashboard/DeliverMan/MyReviews";

import AllDeliveryMen from "@/pages/Dashboard/Admin/AllDeliveryMen";
import AllParcels from "@/pages/Dashboard/Admin/AllParcels";
import UpdateParcel from "@/components/Dashboard/UpdateParcel/UpdateParcel";

import AllUsers from "@/pages/Dashboard/Admin/AllUsers";
import WelcomePage from "@/pages/Dashboard/WelcomePage/WelcomePage";


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
        // <PrivateRoute>
          <DashboardLayout />
        // </PrivateRoute>
      ),
      children: [
        {
          index: true,
        
          element: (
            // <PrivateRoute>
              <WelcomePage />
            // </PrivateRoute>
          ),
        },
        {
          path: 'statistics', // Explicit route for "/dashboard/statistics"
          element: <Statistics />,
        },
        {
          
          path: 'book-parcel',
          element: (
            // <PrivateRoute>
              // <SellerRoute>
                <BookParcel />
              // </SellerRoute>
            // </PrivateRoute>
          ),
        },
        {
          path: 'my-parcels',
          element: (
            // <PrivateRoute>
              // <SellerRoute>
                <MyParcels></MyParcels>
              // </SellerRoute>
            // </PrivateRoute>
          ),
        },
        {
          path: 'my-delivery-list',
          element: (
            // <PrivateRoute>
              // <AdminRoute>
                <MyDeliveryList />
              // </AdminRoute>
            // </PrivateRoute>
          ),
        },
        {
          path: 'profile',
          element: (
            // <PrivateRoute>
              <Profile />
            // </PrivateRoute>
          ),
        },
        {
          path: 'my-reviews',
          element: (
            // <PrivateRoute>
              <MyReviews />
            // </PrivateRoute>
          ),
        },
        {
          path: 'all-users',
          element: (
            // <PrivateRoute>
            //   <SellerRoute>
                <AllUsers />
            //   </SellerRoute>
            // </PrivateRoute>
          ),
        },
        {
          path: 'all-delivery-men',
          element: (
            // <PrivateRoute>
            //   <SellerRoute>
                <AllDeliveryMen />
            //   </SellerRoute>
            // </PrivateRoute>
          ),
        },
        {
          path: 'all-parcels',
          element: (
            // <PrivateRoute>
            //   <SellerRoute>
                <AllParcels />
            //   </SellerRoute>
            // </PrivateRoute>
          ),
        },
        {
          path: 'my-parcels/update-parcel/:id',
          element: (
            // <PrivateRoute>
            //   <SellerRoute>
                <UpdateParcel />
            //   </SellerRoute>
            // </PrivateRoute>
            
          ),
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/api/parcels/${params.id}`)
        },
        
      ],
    },
  ]);