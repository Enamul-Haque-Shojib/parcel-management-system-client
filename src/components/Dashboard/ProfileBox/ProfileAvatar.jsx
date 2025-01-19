// import React from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// const ProfileAvatar = ({show, collapsible}) => {
//     return (
//         <div className="flex justify-between items-center space-x-2">
//                   <Avatar>
//                     <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//                     <AvatarFallback>CN</AvatarFallback>
//                   </Avatar>
                 
//                   <div className='flex flex-col justify-center items-start'>
//                     <p className="font-bold text-xl">Enamul Haque</p>
//                     {
//                         show == true && <p className="text-sm text-gray-500">enamulhaqueshojib@gmail.com</p>
//                     }
                    
//                   </div>
//                 </div>
//     );
// };

// export default ProfileAvatar;




import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar = ({ show }) => {
  return (
    <div className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {show && (
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold">Enamul Haque</p>
          <p className="text-sm text-gray-500">enamulhaqueshojib@gmail.com</p>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
