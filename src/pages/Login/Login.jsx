import useAuth from '@/hooks/useAuth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { saveAuth, setTokenIntoLocalStorage } from '@/utils/utils';

const Login = () => {
  const { signInWithGoogle, loading, user, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    const { email, password } = data;

   
      await signIn(email, password)
      .then(async(res)=>{
        console.log('------login----->>>>>',res);
        const tokenData = await saveAuth(data);
        await setTokenIntoLocalStorage(tokenData?.tokenData)
      navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error)
      })
      
    
    
    
  };

  const handleGoogleSignIn = async () => {
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

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[50%] mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <Navigate to={from} replace={true} />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  <FormMessage />
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
                  <FormDescription>This is your private password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
          <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
        </Form>
      )}
    </div>
  );
};

export default Login;
