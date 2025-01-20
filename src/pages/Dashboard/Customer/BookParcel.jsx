import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const BookParcel = () => {
  const axiosInstance = useAxiosSecure();

  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPrice = (weight) => {
    const numericWeight = parseFloat(weight) || 0; // Convert weight to a number, default to 0 if empty
    setTotalPrice(numericWeight * 15);
  };

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      senderPhoneNumber: "",
      parcelType: "",
      parcelWeight: "",
      receiverName: "",
      receiverPhoneNumber: "",
      parcelDeliveryAddress: "",
      requestedDeliveryDate: "",
      deliveryAddressLatitude: "",
      deliveryAddressLongitude: "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append all fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const initialData = Object.fromEntries(formData.entries());
    const weight = parseInt(initialData.parcelWeight);
    const price = 15 * weight;

    initialData.parcelWeight = weight;
    initialData.price = price;

    console.log(initialData);

    try {
      const response = await axiosInstance.post(
        `/parcels/create-parcel`,
        initialData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Book a Parcel
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Sender Details Section */}
          <div className="col-span-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Sender Details
            </h2>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormDescription>Full name of the sender.</FormDescription>
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senderPhoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Parcel Details Section */}
          <div className="col-span-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Parcel Details
            </h2>
          </div>
          <FormField
            control={form.control}
            name="parcelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parcel Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-md">
                      <SelectGroup>
                        <SelectLabel>Type</SelectLabel>
                        <SelectItem value="Small">Small</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Large">Large</SelectItem>
                        <SelectItem value="Oversized">Oversized</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>Choose the type of parcel.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
  control={form.control}
  name="parcelWeight"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Parcel Weight (kg)</FormLabel>
      <FormControl>
        <Input
          type="number"
          placeholder="Enter parcel weight"
          {...field}
          onChange={(e) => {
            field.onChange(e); // Ensures React Hook Form processes the value
            handleTotalPrice(e.target.value); // Pass the input value to the handler
          }}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
          
          <FormField
            control={form.control}
            name="requestedDeliveryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Requested Delivery Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white border border-gray-200 shadow-lg rounded-md" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex border w-[60%] justify-between">
            <h1>Price: {totalPrice}</h1>
            <p className="text-orange-700">(Per 1Kg = 15Tk)</p>
          </div>

          {/* Receiver Details Section */}
          <div className="col-span-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Receiver Details
            </h2>
          </div>
          <FormField
            control={form.control}
            name="receiverName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Receiver Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter receiver's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="receiverPhoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter receiver's phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parcelDeliveryAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter delivery address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
          control={form.control}
          name="deliveryAddressLatitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Latitude</FormLabel>
              <FormControl>
                <Input placeholder="Latitude" {...field} />
              </FormControl>
             
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deliveryAddressLongitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Longitude</FormLabel>
              <FormControl>
                <Input placeholder="Longitude" {...field} />
              </FormControl>
              
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />

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
  );
};

export default BookParcel;
