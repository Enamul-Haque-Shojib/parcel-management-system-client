import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const ManageDeliveryMen = ({parcelNumber, parcelId}) => {
  const { toast } = useToast()

    const axiosInstance = useAxiosSecure();


    const[deliverMen, setDeliverMen] = useState([]);
    // console.log(deliverMen)

    useEffect(() => {
        axiosInstance.get(`/auth?role=DeliverMan`)
        .then(res => {
            setDeliverMen(res.data.data);
         })
    },[]);


     const form = useForm();

      const onSubmit = async (data) => {
      
         try {
          console.log(data, parcelNumber)
          const manageDate = {
              ApproximateDeliveryDate: data.ApproximateDeliveryDate,
              deliveryMan: data.deliverMenId,
              bookingStatus: "On the way"
          }
          
         const responsive = await axiosInstance.patch(`/auth//manage-parcel/${parcelId}`,manageDate)
              console.log(responsive)
             
           
          toast({
            title: `Successfully managed`,
          });
        } catch (error) {
          console.error("Error updating status:", error);
          toast({
            title: "Failed to manage",
            description: error.message,
            variant: "destructive",
          });
        }
      }

    return (
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{parcelNumber}</DialogTitle>
          <DialogDescription>
            Mange the parcel to Deliver Men.
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
            name="ApproximateDeliveryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Approximate Delivery Date</FormLabel>
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
      
          <FormField
            control={form.control}
            name="deliverMenId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Delivery Man</FormLabel>
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
                      <SelectLabel>Deliver Men Id</SelectLabel>
                        {
                            deliverMen.map(man=>(
                                <SelectItem key={man._id} value={man.authId}>{man.authId}</SelectItem>
                            ))
                        }
                        
                      </SelectGroup>
                    </SelectContent>
                  </Select> 
                </FormControl>
                <FormDescription>Choose the Deliver Men Id.</FormDescription>
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

export default ManageDeliveryMen;