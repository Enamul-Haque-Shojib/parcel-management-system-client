// import { Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupContent } from '@/components/ui/sidebar';
// import { ChartSpline, User, Package, BookDown, Truck, Star } from 'lucide-react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import ProfileBox from '../ProfileBox/ProfileBox';


// const items = [
//   {
//     title: "Statistics",
//     url: "statistics",
//     icon: ChartSpline,
//   },
//   {
//     title: "All Customers",
//     url: "all-customers",
//     icon: User,
//   },
//   {
//     title: "All Delivery Men",
//     url: "all-delivery-men",
//     icon: User,
//   },
//   {
//     title: "All Parcels",
//     url: "all-parcels",
//     icon: Package,
//   },
//   {
//     title: "Book Parcel",
//     url: "book-parcel",
//     icon: BookDown,
//   },
//   {
//     title: "My Parcels",
//     url: "my-parcel",
//     icon: Package,
//   },
//   {
//     title: "My Delivery List",
//     url: "my-delivery-list",
//     icon: Truck,
//   },
//   {
//     title: "My Reviews",
//     url: "my-reviews",
//     icon: Star,
//   },
// ];

// const AppSidebar = () => {
//   const dashboardPrefix = "/dashboard";
//     return (
//       <div>
//          <Sidebar collapsible="icon">
//       <SidebarHeader>
//         <h1>Header</h1>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Application</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                   <Link to={`${dashboardPrefix}/${item.url}`}>
//                         <item.icon />
//                         <span>{item.title}</span>
//                       </Link>
//                   </SidebarMenuButton>

//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter >
//         <ProfileBox ></ProfileBox>
//       </SidebarFooter>
//     </Sidebar>
//       </div>
       
//     );
// };

// export default AppSidebar;




import React from "react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupContent } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { ChartSpline, User, Package, BookDown, Truck, Star } from "lucide-react";
import ProfileBox from "../ProfileBox/ProfileBox";
import useAuth from "@/hooks/useAuth";


const AppSidebar = ({ sidebarOpen }) => {
  // const { role, user } = useAuth();
  const role = 'Admin'

  
  let items = [];
  if(role === "Admin"){
    items = [
      { title: "Statistics", url: "statistics", icon: ChartSpline },
      { title: "All Users", url: "all-users", icon: User },
      { title: "All Delivery Men", url: "all-delivery-men", icon: User },
      { title: "All Parcels", url: "all-parcels", icon: Package },
    ];

  }else if(role === "DeliverMan"){
    items = [
      { title: "My Delivery List", url: "my-delivery-list", icon: Truck },
      { title: "My Reviews", url: "my-reviews", icon: Star },
    ];
  }else if(role === "User"){
    items = [
  
      { title: "Book Parcel", url: "book-parcel", icon: BookDown },
      { title: "My Parcels", url: "my-parcels", icon: Package },
    ];
  }
  const dashboardPrefix = "/dashboard";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <h1>Header</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={`${dashboardPrefix}/${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ProfileBox collapsible={sidebarOpen} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
