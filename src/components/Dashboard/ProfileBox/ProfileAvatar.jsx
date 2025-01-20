




import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar = ({ sidebarOpen }) => {
  return (
    <div className="flex items-center space-x-2">
      <Avatar className={}>
        <AvatarImage src="https://github.com/shadcn.png" className="w-full h-full" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
    </div>
  );
};

export default ProfileAvatar;
