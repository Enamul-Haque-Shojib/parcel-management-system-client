import React, { useState } from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { ChartSpline, User, Package, BookDown, Truck, Star, Search, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/hooks/useAuth";

const AppSidebar = ({ sidebarOpen }) => {

  const {role, user, logOut} = useAuth();
  

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem('ParcelManagementSystemToken');
        // toast.success("Logged out successfully");
      })
      .catch(() => {
        // toast.error("Failed to log out. Please try again.");
      });
  };
  



  const items = {
    Admin: [
      { title: "Statistics", url: "statistics", icon: ChartSpline },
      { title: "All Users", url: "all-users", icon: User },
      { title: "All Delivery Men", url: "all-delivery-men", icon: User },
      { title: "All Parcels", url: "all-parcels", icon: Package },
    ],
    DeliverMan: [
      { title: "My Delivery List", url: "my-delivery-list", icon: Truck },
      { title: "My Reviews", url: "my-reviews", icon: Star },
    ],
    User: [
      { title: "Book Parcel", url: "book-parcel", icon: BookDown },
      { title: "My Parcels", url: "my-parcels", icon: Package },
      { title: "Profile", url: "profile", icon: User },
    ],
  };

  const dashboardPrefix = "/dashboard";

  return (
    <Sidebar
      collapsible="icon"
      className={`${
        sidebarOpen ? "w-[260px]" : "w-[80px]"
      } bg-gradient-to-b from-gray-800 to-gray-900 text-white transition-all duration-300`}
    >
      {/* Header */}
      <SidebarHeader className="flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-2">
          
          {sidebarOpen && <h1 className="text-2xl font-bold">Parcel Warehouse</h1>}
        </div>
        <Search className="w-5 h-5 hover:opacity-75" />
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel className="text-gray-400 uppercase tracking-wide px-4">
            Application
          </SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items[role]?.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="hover:bg-gray-700 rounded-md transition-all duration-200"
                >
                  <SidebarMenuButton asChild>
                    <Link
                      to={`${dashboardPrefix}/${item.url}`}
                      className="flex items-center gap-3 px-3 py-2"
                    >
                      <item.icon className="w-6 h-6" />
                      <span
                        className={`${
                          sidebarOpen ? "block" : "hidden"
                        } text-sm transition-opacity duration-200`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="mt-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-gray-600">
            {/* <User className="w-5 h-5 text-white" /> */}
           
            <Avatar className={!sidebarOpen ? 'w-5 h-5' : ''}>
                <AvatarImage src={user.photoURL} className="w-full h-full" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
          </div>
          {sidebarOpen && (
            <div className="text-sm">
              <p className="font-bold">{user.displayName}</p>
              <p className="text-gray-400 text-xs">{user.email}</p>
            </div>
          )}
        </div>
        {sidebarOpen && (
          <Button 
          className="w-full mt-4 bg-red-600 hover:bg-red-500"
          onClick={handleLogOut}
          >Logout</Button>
        )}
        {!sidebarOpen && (
          <LogOut className="w-5 h-5 cursor-pointer" onClick={handleLogOut}></LogOut>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
