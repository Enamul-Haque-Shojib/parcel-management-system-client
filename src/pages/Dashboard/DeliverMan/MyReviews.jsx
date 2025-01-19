import ReviewCard from '@/components/Dashboard/ReviewCard/ReviewCard';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

const MyReviews = () => {
    const axiosInstance = useAxiosSecure();


    const[reviews, setReviews] = useState([]);
    

    useEffect(() => {
        axiosInstance.get(`/auth/get-reviews/DM-0004`)
        .then(res => {
            setReviews(res.data.data);
         })
    },[]);



    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                reviews.map((review) => (
                    <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>
                  ))
            }
        </div>
    );
};

export default MyReviews;