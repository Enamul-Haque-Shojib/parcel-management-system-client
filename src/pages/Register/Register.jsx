import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { imageUpload, saveAuth, setTokenIntoLocalStorage } from "@/utils/utils";

const Register = () => {
  const navigate = useNavigate();
  const [roleSignUp, setRoleSignUp] = useState("User");
  const [imagePreview, setImagePreview] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { createUser, updateUserProfile, signInWithGoogle, user, loading } = useAuth();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleRoleSignUp = (roleName) => {
    setRoleSignUp(roleName);
  };

  const form = useForm({
    defaultValues: {
      authName: "",
      email: "",
      authImgUrl: null,
      authPhoneNumber: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const imageFile = data.authImgUrl[0];
    const authName = data.authName;
    const email = data.email;
    const password = data.password;
    const authImgUrl = await imageUpload(imageFile);
    const authPhoneNumber = data.authPhoneNumber;
    const role = roleSignUp;

    try {
      await createUser(email, password);
      await updateUserProfile(authName, authImgUrl);

      const userInfo = { authName, email, authImgUrl, authPhoneNumber, role };
      const tokenData = await saveAuth(userInfo);
      await setTokenIntoLocalStorage(tokenData?.tokenData);

      navigate(from, { replace: true });
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const response = await signInWithGoogle();
      const { displayName, email, photoURL } = response.user;

      const userInfo = { authName: displayName, email, authImgUrl: photoURL, role: "User" };
      const tokenData = await saveAuth(userInfo);
      await setTokenIntoLocalStorage(tokenData?.tokenData);

      navigate(from, { replace: true });
    } catch (err) {
      console.log("Google Sign-Up Error:", err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-8 bg-white shadow-lg rounded-lg sm:p-8">
      <h1 className="text-3xl font-bold text-center text-green-800">Create an Account</h1>
      <h1 className="text-center text-xl font-bold ">{roleSignUp}</h1>
      <p className="text-center text-gray-600">
        Sign up as a{" "}
        <span
          className="cursor-pointer underline text-blue-600 font-bold"
          onClick={() => handleRoleSignUp("User")}
        >
          User
        </span>{" "}
        or{" "}
        <span
          className="cursor-pointer underline text-green-600 font-bold"
          onClick={() => handleRoleSignUp("Deliver Man")}
        >
          Deliver Man
        </span>
      </p>

      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading...</p>
      ) : user ? (
        <Navigate to={from} replace={true} />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="authName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
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
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="authImgUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(e.target.files);
                        if (file) setImagePreview(URL.createObjectURL(file));
                      }}
                    />
                  </FormControl>
                  {imagePreview && <img src={imagePreview} alt="Preview" className="w-20 h-20 rounded-full mt-2" />}
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
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
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
                </FormItem>
              )}
            />
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
              Register
            </Button>
          </form>
          {roleSignUp === "User" && (
            <Button
              onClick={handleGoogleSignUp}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md mt-4"
            >
              Sign Up with Google
            </Button>
          )}
        </Form>
      )}
    </div>
  );
};

export default Register;
