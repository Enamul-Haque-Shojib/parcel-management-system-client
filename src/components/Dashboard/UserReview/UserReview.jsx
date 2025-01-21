import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast"
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React from 'react';
import { useForm } from 'react-hook-form';

const UserReview = ({deliverManId}) => {
    console.log(deliverManId)
    const axiosInstance = useAxiosSecure()
    const { toast } = useToast()
     const form = useForm();
     const onSubmit = async (data) => {
      
        try {
      
         const reviewDate = {
             userName:"Mike",
            userImgUrl: "asfsfsdfsdf",
            email:"mike@gmail.com",
            feedback:data.feedback,
            rating:3
         }
         
        const responsive = await axiosInstance.patch(`auth/review-user/${deliverManId}`,reviewDate)
             console.log(responsive)
            
          
         toast({
           title: `Successfully reviewed at ${deliverManId}`,
         });
       } catch (error) {
         console.error("Error review:", error);
         toast({
           title: "Failed to review",
           description: error.message,
           variant: "destructive",
         });
       }
     }
    return (
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{deliverManId}</DialogTitle>
          <DialogDescription>
            Review to Deliver Man .
          </DialogDescription>
        </DialogHeader>
        <div className="">
        <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=""
        >

<FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback</FormLabel>
                <FormControl>
                <Textarea
                  placeholder="Tell us a about delivery man"
                  className="resize-none"
                  {...field}
                />
                </FormControl>
                <FormDescription>Tell us about delivery man.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

   
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