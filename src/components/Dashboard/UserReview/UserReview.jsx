import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Star } from 'lucide-react'; // Icon for stars

const UserReview = ({ deliverManId }) => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      feedback: '',
      rating: 0,
    },
  });
  const [selectedRating, setSelectedRating] = useState(0); // State for rating

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
    form.setValue('rating', rating); // Set rating value in the form
  };

  const onSubmit = async (data) => {
    const token = JSON.parse(localStorage.getItem('ParcelManagementSystemToken'));

    try {
      const reviewData = {
        userName: user?.displayName,
        userImgUrl: user?.photoURL,
        email: user?.email,
        feedback: data.feedback,
        rating: selectedRating,
      };

      const response = await axiosInstance.patch(
        `auth/review-user/${deliverManId}`,
        reviewData,
        {
          headers: {
            Authorization: `${token.token}`,
          },
        }
      );
      console.log(response);

      toast({
        title: `Successfully reviewed deliver man ID ${deliverManId}`,
      });
    } catch (error) {
      console.error('Error review:', error);
      toast({
        title: 'Failed to review',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{deliverManId}</DialogTitle>
        <DialogDescription>Review the Delivery Man.</DialogDescription>
      </DialogHeader>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {/* Feedback Field */}
            <FormField
              control={form.control}
              name="feedback"
              rules={{ required: 'Feedback is required.' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about the delivery man"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Share your experience.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Star Rating */}
            <div className="flex items-center space-x-2 my-4">
              <FormLabel className="mr-4">Rating</FormLabel>
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={`w-8 h-8 cursor-pointer ${
                    selectedRating > index ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  onClick={() => handleStarClick(index + 1)}
                />
              ))}
              {selectedRating === 0 && (
                <p className="text-red-500 text-sm">Rating is required.</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-span-full text-center">
              <Button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};

export default UserReview;
