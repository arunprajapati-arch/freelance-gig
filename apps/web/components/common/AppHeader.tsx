"use client";

import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface AppHeaderProps {
  showSearch?: boolean;
  searchPlaceholder?: string;
  user?: {
    name: string;
    avatar?: string;
    email?: string;
  };
}

export default function AppHeader({ 
  showSearch = true, 
  searchPlaceholder = "Search...",
  user 
}: AppHeaderProps) {
  const [notificationCount] = useState(3); // Mock notification count

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* Left Section - Brand */}
          {/* <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="">
              <h1 className="md:text-xl font-bold text-gray-900">SampleDekho</h1>
              <p className="text-xs text-gray-500 -mt-1">Marketplace</p>
            </div>
          </div> */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-900">
                Sample<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Dekho</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500 hidden md:block">B2B Marketplace</p>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Search - Compact & Elegant */}
            {showSearch && (
              <div className="hidden md:flex relative">
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder={searchPlaceholder}
                    className="pl-10 pr-4 py-2 w-80 bg-gray-50/50 border-1 rounded-full text-sm placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:shadow-sm transition-all"
                  />
                </div>
              </div>
            )}

            {/* Search button for mobile */}
            {showSearch && (
              <button className="md:hidden p-2.5 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            )}
            
            {/* Notifications */}
            <div className="relative">
              <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors group relative">
                <Bell className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
                {notificationCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium text-[10px]">
                    {notificationCount}
                  </span>
                )}
              </button>
            </div>

            {/* User Section */}
            <div className="flex items-center space-x-3 pl-2">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-medium text-gray-900">{user?.name || "Guest"}</span>
                <span className="text-xs text-gray-500">{user?.email}</span>
              </div>
              
              <Avatar className="w-9 h-9 ring-2 ring-white shadow-sm hover:shadow-md transition-all cursor-pointer">
                <AvatarImage 
                  src={user?.avatar} 
                  alt={user?.name || "User"} 
                />
                <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold">
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 