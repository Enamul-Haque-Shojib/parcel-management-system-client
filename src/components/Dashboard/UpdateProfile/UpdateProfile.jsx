
import {
  DialogContent,
  DialogDescription,

  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { imageUpload } from "@/utils/utils";
import useAuth from "@/hooks/useAuth";

const UpdateProfile = ({profileData}) => {
    console.log(profileData);
    const {updateUserProfile} = useAuth();
    
    const axiosInstance = useAxiosSecure()

  
    
      const defaultValues = {
        authName: profileData?.authName,
       
        authImgUrl: null,
        authPhoneNumber: profileData?.authPhoneNumber || '',
        
      
      };
    
      const form = useForm({
        defaultValues,
        mode: 'onChange', // Optional: Customize validation behavior
    });
    
      const onSubmit = async (data) => {
         const imageFile = data.authImgUrl[0]; 
                  const authName = data.authName;
             
          
                  const authImgUrl = await imageUpload(imageFile);
                  const authPhoneNumber = data.authPhoneNumber;

                  const token = JSON.parse(localStorage.getItem('ParcelManagementSystemToken'))
        try {
            await updateUserProfile(authName, authImgUrl)

            const userInfo = {
                authName,
         
                authImgUrl,
                authPhoneNumber,
        
              }
             

          const response = await axiosInstance.patch(
            `/auth/update-auth/${profileData._id}`,
            {
              headers:{
                  "Authorization" : `${token.token}`
              }
              
          },
            {
              userInfo
            }
          );
          console.log(response.data)
        //   toast({ title: "Parcel updated successfully!", status: "success" });
        } catch (error) {
          console.error("Error updating Profile:", error);
        //   toast({ title: "Failed to update parcel", status: "error" });
        }
      };
    return (
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
          <DialogDescription>
            Mange Your Profile
          </DialogDescription>
        </DialogHeader>
        <div className="">
        <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               <FormField
   control={form.control}
   name="authName"
   render={({ field }) => (
       <FormItem>
           <FormLabel>Name</FormLabel>
           <FormControl>
               <Input
                   placeholder="Name"
                   {...field}
                   value={field.value || ''}
               />
           </FormControl>
           <FormDescription>
               This is your public display name.
           </FormDescription>
           <FormMessage />
       </FormItem>
   )}
/>
                 
         
                 <FormField
   control={form.control}
   name="authImgUrl"
   render={({ field }) => (
       <FormItem>
           <FormLabel>Image</FormLabel>
           <FormControl>
               <Input
                   type="file"
                   accept="image/*"
                   onChange={(e) => {
                       field.onChange(e.target.files || null); // Handle uncontrolled case
                   }}
               />
           </FormControl>
           <FormDescription>
               Upload an image for your profile.
           </FormDescription>
           <FormMessage />
       </FormItem>
   )}
/>
         
                 <FormField
                   control={form.control}
                   name="authPhoneNumber"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>Phone Number</FormLabel>
                       <FormControl>
                         <Input placeholder="Phone Number" {...field} />
                       </FormControl>
                       <FormDescription>
                         This is your public display Number.
                       </FormDescription>
                       <FormMessage></FormMessage>
                     </FormItem>
                   )}
                 />
               
               
                 <Button type="submit">Submit</Button>
                 </form>
                 
                 
                 </Form>
        </div>
       
      </DialogContent>
    );
};

export default UpdateProfile;