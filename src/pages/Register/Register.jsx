import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useAuth from '@/hooks/useAuth';
import { imageUpload, saveAuth, setTokenIntoLocalStorage } from '@/utils/utils';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [roleSignUp, setRoleSignUp] = useState('User');
    const {createUser, updateUserProfile, signInWithGoogle, user, loading} = useAuth();

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    const handleRoleSignUp = (roleName) =>{
      setRoleSignUp(roleName);
  }
 

    const form = useForm({
      defaultValues: {
        authName: "",
        email: "",
        authImgUrl: null,
        authPhoneNumber: "",
        password: "",
      },
    });

      const onSubmit = async(data) => {
         
          const imageFile = data.authImgUrl[0]; 
          const authName = data.authName;
          const email = data.email;
          const password = data.password;
          const authImgUrl = await imageUpload(imageFile);
          const authPhoneNumber = data.authPhoneNumber;
          const role = roleSignUp
          
  
          try {
            await createUser(email, password);
  
           await updateUserProfile(authName, authImgUrl)

            

            const userInfo = {
                authName,
                email,
                authImgUrl,
                authPhoneNumber,
                role
              }
              
  
          } catch (error) {
            console.log(error)
          }
  
      }

      const handleGoogleSignUp = async () => {
        try {
          const response = await signInWithGoogle();
            const { displayName, email, photoURL} = response.user;
        
            const userInfo = {
              authName : displayName,
              email,
              authImgUrl : photoURL,
              role: "User"
            }

            const tokenData = await saveAuth(userInfo);
            await setTokenIntoLocalStorage(tokenData?.tokenData)
            navigate(from, { replace: true });
        } catch (err) {
          console.log(err)
          // toast.error(err?.message)
        }
      }
  
      return (
          <div className="w-[50%] mx-auto">
            <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
              Create an Account
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Sign up for <span className='cursor-pointer underline text-xl font-bold text-green-600' onClick={()=>{handleRoleSignUp('Deliver Man')}}>Deliver Man</span> or <span className='cursor-pointer text-xl underline font-bold text-blue-600' onClick={()=>{handleRoleSignUp('User')}}>User</span>
            </p>

            {
                roleSignUp === 'User' ? <h1 className='text-3xl text-center my-6 font-bold text-blue-600'>User</h1> : <h1 className='text-3xl text-center my-6 font-bold text-green-600'>Deliver Man</h1>
            }
           {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <Navigate to={from} replace={true} />
      ) : (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="authName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display Email.
                </FormDescription>
                <FormMessage></FormMessage>
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
                        field.onChange(e.target.files); // Update field value with FileList
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
        
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormDescription>
                  This is your Private.
                </FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
          </form>
          {
            roleSignUp === "User" && (
              <Button onClick={handleGoogleSignUp}>Sign Up with Google</Button>
            )
          }
          
          </Form>
      )}
          
          </div>
      );
};

export default Register;