import React, { useEffect, useState } from "react";
import ReviewCard from "@/components/Dashboard/ReviewCard/ReviewCard";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Loader } from "lucide-react";
import useAuth from "@/hooks/useAuth";

const MyReviews = () => {
  const axiosInstance = useAxiosSecure();
  const {user,role, authId} = useAuth()
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
 


  const token = JSON.parse(localStorage.getItem('ParcelManagementSystemToken'))
  useEffect(() => {
    axiosInstance
      .get(`/auth/get-reviews/${authId}`,
        {
          headers:{
              "Authorization" : `${token.token}`
          }
          
      }
      )
        
      
      .then((res) => {
      
        setReviews(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch reviews:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader className="animate-spin text-gray-400 w-10 h-10" />
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-500 text-lg">
        No reviews available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
};

export default MyReviews;
