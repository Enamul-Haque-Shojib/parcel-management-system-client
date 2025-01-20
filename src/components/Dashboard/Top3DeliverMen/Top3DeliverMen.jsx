import React, { useEffect, useState } from 'react';
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import useAxiosSecure from '@/hooks/useAxiosSecure';
const Top3DeliverMen = () => {
    const [topDeliverMen, setTopDeliverMen] = useState([]);
    const axiosInstance = useAxiosSecure();

    console.log(topDeliverMen)
    useEffect(() =>{
      
          axiosInstance.get(`http://localhost:5000/api/statistics/top-deliver-men`)
          .then(res => {
            console.log(res.data)
            setTopDeliverMen(res.data.data);
        })

    },[]);

    return (
        <div className='lg:w-[90%] w-[95%] mx-auto my-10'>
            <div className='grid grid-cols-3'>
                {
                    topDeliverMen.map((man,index)=>(
                       
                        <Card key={index} className="w-[350px]">
                            <CardHeader>
                                <div>
                                <AspectRatio ratio={16 / 9} className="bg-muted">
                                <img
                                    src={man.image}
                                    alt="Photo by Drew Beamer"
                                    
                                    className="h-full w-full rounded-md object-cover"
                                />
                                </AspectRatio>
                                </div>
                                <CardTitle>{man.name}</CardTitle>
                                
                            </CardHeader>
                            <CardContent>
                               <h1>Delivered: {man.delivered}</h1>
                               <h1>Rating: {man.rating}</h1>
                            </CardContent>
                            
                            </Card>
                       
                    ))
                }
               
            </div>
        </div>
    );
};

export default Top3DeliverMen;