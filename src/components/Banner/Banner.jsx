import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Banner = () => {
    return (
        <AspectRatio ratio={10 / 5} className="bg-muted">
            <div 
                style={{
                    backgroundImage: "url('https://shipsy.io/wp-content/uploads/2021/05/Blog-119-2.jpg')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Adds a darker overlay
                    backgroundBlendMode: "lighten",
                }} 
                className="h-full w-full rounded-md object-cover relative"
            >
                <div 
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker overlay for contrast
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />
                <h1 
                    className="absolute inset-0 flex items-center justify-center text-red-700 font-bold text-5xl"
                    style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                >
                    Parcel Management System
                </h1>
            </div>
        </AspectRatio>
    );
};

export default Banner;
