import * as React from "react"
 
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

const Features = () => {
    return (
        
        <div>
            <h1>Features</h1>
            <div className='grid grid-cols-3 gap-3 mx-auto'>
            
            <div>
            <Card className="w-[350px]">
      <CardHeader>
        <div className="flex justify-start items-center">
            <img className="w-[70px] h-[70px]" src="https://cdn-icons-png.flaticon.com/512/10496/10496458.png" alt="" />
            <CardTitle className="text-2xl">Parcel Safety</CardTitle>
        </div>
        
        <CardDescription>Your parcels are in safe hands! Our app ensures every package is handled with care, securely packed, and tracked throughout its journey, giving you peace of mind.</CardDescription>
      </CardHeader>
      
    </Card>
            </div>
            <div>
            <Card className="w-[350px]">
      <CardHeader>
      <div className="flex justify-start items-center">
            <img className="w-[70px] h-[70px]" src="https://cdn-icons-png.freepik.com/512/12334/12334953.png" alt="" />
            <CardTitle>Super Fast Delivery</CardTitle>
        </div>
        <CardDescription>Get your parcels delivered in record time! With our optimized routes and real-time tracking, your packages reach their destination faster than ever.

        </CardDescription>
      </CardHeader>
    </Card>
            </div>
            <div>
            <Card className="w-[350px]">
      <CardHeader>
      <div className="flex justify-start items-center">
            <img className="w-[70px] h-[70px]" src="https://cdn3d.iconscout.com/3d/premium/thumb/location-pin-3d-icon-download-in-png-blend-fbx-gltf-file-formats--map-pointer-marker-tracking-and-navigation-pack-services-icons-7191768.png?f=webp" alt="" />
            <CardTitle>Live Tracking & Updates</CardTitle>
        </div>
        
        <CardDescription>Stay informed at every step! Track your parcel in real time with live updates and notifications, so you're always in the loop.</CardDescription>
      </CardHeader>
    </Card>
            </div>
        </div>
        </div>
    );
};

export default Features;