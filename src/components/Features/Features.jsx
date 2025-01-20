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
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Our Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <Card className="group w-full h-full transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
          <CardHeader className="p-6">
            <div className="flex items-center mb-6">
              <img
                className="w-16 h-16 mr-4"
                src="https://cdn-icons-png.flaticon.com/512/10496/10496458.png"
                alt="Parcel Safety Icon"
              />
              <CardTitle className="text-2xl font-semibold text-blue-800">
                Parcel Safety
              </CardTitle>
            </div>
            <CardDescription className="text-gray-700 leading-relaxed">
              Your parcels are in safe hands! Our app ensures every package is
              securely packed and tracked, giving you peace of mind.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Feature 2 */}
        <Card className="group w-full h-full transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden">
          <CardHeader className="p-6">
            <div className="flex items-center mb-6">
              <img
                className="w-16 h-16 mr-4"
                src="https://cdn-icons-png.freepik.com/512/12334/12334953.png"
                alt="Fast Delivery Icon"
              />
              <CardTitle className="text-2xl font-semibold text-green-800">
                Super Fast Delivery
              </CardTitle>
            </div>
            <CardDescription className="text-gray-700 leading-relaxed">
              Get your parcels delivered in record time! Our optimized routes
              and real-time tracking make speedy delivery a reality.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Feature 3 */}
        <Card className="group w-full h-full transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl overflow-hidden">
          <CardHeader className="p-6">
            <div className="flex items-center mb-6">
              <img
                className="w-16 h-16 mr-4"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/location-pin-3d-icon-download-in-png-blend-fbx-gltf-file-formats--map-pointer-marker-tracking-and-navigation-pack-services-icons-7191768.png?f=webp"
                alt="Live Tracking Icon"
              />
              <CardTitle className="text-2xl font-semibold text-yellow-800">
                Live Tracking & Updates
              </CardTitle>
            </div>
            <CardDescription className="text-gray-700 leading-relaxed">
              Stay informed at every step! Track your parcel in real-time with
              live updates and notifications, keeping you in the loop.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Features;
