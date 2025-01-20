import * as React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Features = () => {
  return (
    <div className="lg:w-[85%] w-[95%] mx-auto my-12">
      <h1 className="text-3xl font-bold text-center mb-10">Our Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <Card className="group w-full h-full transition-transform transform hover:scale-105 shadow-md hover:shadow-lg bg-white">
          <CardHeader className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 mr-4"
                src="https://cdn-icons-png.flaticon.com/512/10496/10496458.png"
                alt="Parcel Safety Icon"
              />
              <CardTitle className="text-2xl font-semibold">
                Parcel Safety
              </CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Your parcels are in safe hands! Our app ensures every package is
              handled with care, securely packed, and tracked throughout its
              journey, giving you peace of mind.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Feature 2 */}
        <Card className="group w-full h-full transition-transform transform hover:scale-105 shadow-md hover:shadow-lg bg-white">
          <CardHeader className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 mr-4"
                src="https://cdn-icons-png.freepik.com/512/12334/12334953.png"
                alt="Fast Delivery Icon"
              />
              <CardTitle className="text-2xl font-semibold">
                Super Fast Delivery
              </CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Get your parcels delivered in record time! With our optimized
              routes and real-time tracking, your packages reach their
              destination faster than ever.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Feature 3 */}
        <Card className="group w-full h-full transition-transform transform hover:scale-105 shadow-md hover:shadow-lg bg-white">
          <CardHeader className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 mr-4"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/location-pin-3d-icon-download-in-png-blend-fbx-gltf-file-formats--map-pointer-marker-tracking-and-navigation-pack-services-icons-7191768.png?f=webp"
                alt="Live Tracking Icon"
              />
              <CardTitle className="text-2xl font-semibold">
                Live Tracking & Updates
              </CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Stay informed at every step! Track your parcel in real-time with
              live updates and notifications, so you're always in the loop.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Features;
