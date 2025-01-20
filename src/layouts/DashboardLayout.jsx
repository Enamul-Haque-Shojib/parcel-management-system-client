

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/Dashboard/AppSidbar/AppSidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <SidebarProvider >
        <AppSidebar sidebarOpen={sidebarOpen} />
        <main className="flex-1">
          <SidebarTrigger onClick={toggleSidebar} />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
