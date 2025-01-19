import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';


const BookParcel = () => {
  const axiosInstance = useAxiosSecure();

    const form = useForm({
        defaultValues: {
          name: "enamul haque",
          email: "enamulhaqueshojib@gmail.com",
          senderPhoneNumber: "2632584",
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

      const initialData = Object.fromEntries(formData.entries())
      const weight = parseInt(initialData.parcelWeight)
      const price = 15 * weight;
      
      initialData.parcelWeight = weight
      initialData.price = price;
    
     

      console.log(initialData);
  
      try {
        const response = await axiosInstance.post(`/parcels/create-parcel`, initialData)
                  
        console.log(response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };


    return (
        <div className="w-[100%] mx-auto">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
             
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
              
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="senderPhoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sender Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parcelType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parcel Type</FormLabel>
              <FormControl>
              <Select Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Parcel Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
          <SelectLabel>Type</SelectLabel>
          <SelectItem value="Small">Small</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Large">Large</SelectItem>
          <SelectItem value="Oversized">OverSize</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
              </FormControl>
             
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parcelWeight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parcel Weight</FormLabel>
              <FormControl>
                <Input placeholder="Parcel Weight" {...field} />
              </FormControl>
             
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="receiverName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Name</FormLabel>
              <FormControl>
                <Input placeholder="Receiver Name" {...field} />
              </FormControl>
           
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="receiverPhoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Receiver Phone Number" {...field} />
              </FormControl>
             
              <FormMessage></FormMessage>
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
                <Input placeholder="Delivery Address" {...field} />
              </FormControl>
             
              <FormMessage></FormMessage>
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
                                    <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                        date < new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                    </PopoverContent>
                                </Popover>
             
            
              <FormMessage></FormMessage>
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
      
        
        <Button type="submit">Submit</Button>
        </form>
        </Form>
        </div>
    );
};

export default BookParcel;