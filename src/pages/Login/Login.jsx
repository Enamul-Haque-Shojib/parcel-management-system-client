import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { saveAuth, setTokenIntoLocalStorage } from "@/utils/utils";

const Login = () => {
  const { signInWithGoogle, loading, user, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState("");

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    setLoginError(""); // Reset login error

    try {
      const res = await signIn(email, password);
      const tokenData = await saveAuth(data);
      await setTokenIntoLocalStorage(tokenData?.tokenData);
      navigate(from, { replace: true });
    } catch (error) {
      setLoginError("Invalid email or password. Please try again.");
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await signInWithGoogle();
      const { displayName, email, photoURL } = response.user;

      const userInfo = {
        authName: displayName,
        email,
        authImgUrl: photoURL,
        role: "User",
      };

      const tokenData = await saveAuth(userInfo);
      await setTokenIntoLocalStorage(tokenData?.tokenData);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-800">Login</h1>
      <p className="text-center text-gray-600 mb-6">
        Welcome back! Please log in to your account.
      </p>

      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading...</p>
      ) : user ? (
        <Navigate to={from} replace={true} />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {loginError && (
              <p className="text-red-500 text-center">{loginError}</p>
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Use the email associated with your account.
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
                    <div className="relative">
                      <Input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? "Hide" : "Show"}
                      </button>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Your password is secure and private.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
            >
              Log In
            </Button>
          </form>
          <div className="mt-4">
            <Button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
            >
              Sign in with Google
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default Login;
