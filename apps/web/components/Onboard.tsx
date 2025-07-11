'use client';
import { completeOnboarding } from "@/app/actions/onboard";
import { useActionState } from "react";
import { Button } from "./ui/button";

export default function Onboard() {
  const [state, formAction] = useActionState(completeOnboarding,{success: false, message:""})

  return (
    <div className="bg-gradient-to-br from-stone-50 to-stone-100 h-dvh  md:h-[90vh] w-full md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-stone-200 shadow-sm sm:shadow-md lg:shadow-lg">
      <div className="flex flex-col items-center justify-center gap-8 h-full ">
        {/* Header */}
        <div className=" mb-6 lg:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-tight text-stone-900 mb-2 text-center ">
            Complete your profile
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base text-center">
            Set up your account to get started with our platform
          </p>
        </div>
        
        {/* Main Content */}
        <div className="md:flex-1 flex flex-col   justify-center w-full md:h-full ">
          <form id="onboard-form" action={formAction} className="flex flex-col lg:flex-row w-full items-center  md:justify-evenly gap-6 ">
            <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-sm ">
              {/* Display Name */}
              <div className="group">
                <label htmlFor="displayName" className="block pl-3 sm:pl-4 text-xs sm:text-sm font-medium text-stone-700 mb-2 group-focus-within:text-rose-900 transition-colors duration-200">
                  Display Name
                </label>
                <input 
                  type="text" 
                  name="displayName" 
                  id="displayName"
                  placeholder="Enter your display name" 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-rose-200 rounded-full bg-gradient-to-b from-white to-rose-50 shadow-md shadow-rose-900/10 focus:ring-2 focus:ring-rose-900 focus:border-rose-900 focus:shadow-lg focus:shadow-rose-900/20 outline-none transition-all duration-300 text-rose-950 placeholder-rose-900/50 transform hover:scale-[1.02] focus:scale-[1.02] hover:shadow-lg hover:shadow-rose-900/15 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Username */}
              <div className="group">
                <label htmlFor="username" className="block pl-3 sm:pl-4 text-xs sm:text-sm font-medium text-stone-700 mb-2 group-focus-within:text-rose-900 transition-colors duration-200">
                  Username
                </label>
                <input 
                  type="text" 
                  name="username" 
                  id="username"
                  placeholder="Choose a unique username" 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-rose-200 rounded-full bg-gradient-to-b from-white to-rose-50 shadow-md shadow-rose-900/10 focus:ring-2 focus:ring-rose-900 focus:border-rose-900 focus:shadow-lg focus:shadow-rose-900/20 outline-none transition-all duration-300 text-rose-950 placeholder-rose-900/50 transform hover:scale-[1.02] focus:scale-[1.02] hover:shadow-lg hover:shadow-rose-900/15 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Account Type */}
              <div>
                <label className="block pl-3 sm:pl-4 text-xs sm:text-sm font-medium text-stone-700 mb-3">
                  Account Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full">
                  <label className="flex items-center justify-center border border-rose-200 p-3 px-4 sm:px-6 rounded-full cursor-pointer bg-gradient-to-b from-white to-rose-50 shadow-md shadow-rose-900/10 hover:shadow-lg hover:shadow-rose-900/20 has-[:checked]:bg-gradient-to-b has-[:checked]:from-rose-700 has-[:checked]:to-rose-900 has-[:checked]:border-rose-900 has-[:checked]:text-white has-[:checked]:shadow-lg has-[:checked]:shadow-rose-900/30 transition-all duration-300 group hover:scale-105 has-[:checked]:scale-105 min-w-0">
                    <input 
                      type="radio" 
                      name="accountType" 
                      value="MANUFACTURER" 
                      className="sr-only" 
                      required
                    />
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-medium group-has-[:checked]:font-semibold">
                        Manufacturer
                      </div>
                    </div>
                  </label>
                  <label className="flex items-center justify-center border border-rose-200 p-3 px-4 sm:px-6 rounded-full cursor-pointer bg-gradient-to-b from-white to-rose-50 shadow-md shadow-rose-900/10 hover:shadow-lg hover:shadow-rose-900/20 has-[:checked]:bg-gradient-to-b has-[:checked]:from-rose-700 has-[:checked]:to-rose-900 has-[:checked]:border-rose-900 has-[:checked]:text-white has-[:checked]:shadow-lg has-[:checked]:shadow-rose-900/30 transition-all duration-300 group hover:scale-105 has-[:checked]:scale-105 min-w-0">
                    <input 
                      type="radio" 
                      name="accountType" 
                      value="CLIENT" 
                      className="sr-only" 
                      required
                    />
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-medium group-has-[:checked]:font-semibold">
                        Client
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Error/Success Message */}
              {state.message && (
                <div className={`p-3 rounded-lg text-xs sm:text-sm animate-in slide-in-from-top duration-300 shadow-md ${
                  state.success 
                    ? 'bg-gradient-to-b from-green-50 to-green-100 text-green-700 border border-green-200 shadow-green-900/10' 
                    : 'bg-gradient-to-b from-red-50 to-red-100 text-red-700 border border-red-200 shadow-red-900/10'
                }`}>
                  {state.message}
                </div>
              )}

              {/* Submit Button for Mobile */}
              {/* <div className="lg:hidden w-full flex justify-center">
                <Button 
                  type="submit"
                  className=" bg-rose-900 hover:bg-rose-950 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-900 focus:ring-offset-2 transform hover:scale-105 active:scale-95 hover:shadow-lg text-sm"
                >
                  Complete Profile
                </Button>
              </div> */}
            </div>

            {/* Profile Image Upload */}
            <div className="flex flex-col items-center animate-in slide-in-from-right duration-700 delay-300 order-first lg:order-last">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-b from-stone-100 to-stone-200 rounded-full border-4 border-white shadow-lg shadow-stone-900/10 flex items-center justify-center mb-3 sm:mb-4 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/20 hover:scale-105 group">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-stone-400 group-hover:text-stone-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <label className="relative cursor-pointer group">
                <input type="file" name="profileImage" className="sr-only" accept="image/*" />
                <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-stone-200 rounded-lg text-xs sm:text-sm font-medium text-stone-700 bg-gradient-to-b from-white to-stone-50 shadow-md shadow-stone-900/10 hover:shadow-lg hover:shadow-stone-900/20 focus:outline-none focus:ring-2 focus:ring-rose-900 focus:ring-offset-2 transition-all duration-300 group-hover:scale-105 group-active:scale-95">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Upload Photo
                </span>
              </label>
            </div>
          </form>
        </div>
        
        {/* Submit Button for Desktop */}
        <div className="flex w-full justify-end items-end mt-4">
          <Button 
            type="submit"
            form="onboard-form"
            className="bg-gradient-to-b from-rose-700 to-rose-900 hover:from-rose-800 hover:to-rose-950 text-rose-100 font-semibold py-5 px-8 rounded-lg shadow-md shadow-rose-900/20 hover:shadow-lg hover:shadow-rose-900/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-900 focus:ring-offset-2 transform hover:scale-105 active:scale-95 text-base tracking-tighter"
          >
            Complete Profile
          </Button>
        </div>
      </div>
    </div>
  )
}