"use client"

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Building2, 
  Camera,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: 1, title: "Profile Setup", description: "Tell us about yourself" },
  { id: 2, title: "Account Type", description: "Choose your role" },
  { id: 3, title: "Complete", description: "You're all set!" }
];

export default function OnboardPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    displayName: "",
    username: "",
    accountType: null as "MANUFACTURER" | "CUSTOMER" | null,
    profileImage: null as string | null
  });
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAccountTypeSelect = (type: "MANUFACTURER" | "CUSTOMER") => {
    setFormData(prev => ({
      ...prev,
      accountType: type
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          profileImage: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1: return formData.displayName.trim().length > 0 && formData.username.trim().length > 0;
      case 2: return formData.accountType !== null;
      default: return true;
    }
  };

  const handleNext = () => {
    if (canProceedToNext()) {
      setCurrentStep(prev => Math.min(STEPS.length, prev + 1));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleComplete = async () => {
    setIsLoading(true);
    
    try {
      console.log({
        displayName: formData.displayName,
        username: formData.username,
        accountType: formData.accountType,
        profileImage: formData.profileImage
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = "/home";
    } catch (error) {
      console.error("Error completing onboarding:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            {/* Profile Image Section */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                  {formData.profileImage ? (
                    <AvatarImage src={formData.profileImage} alt="Profile" className="object-cover" />
                  ) : (
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                      {formData.displayName ? 
                        formData.displayName.slice(0, 2).toUpperCase() : 
                        <User className="w-12 h-12 text-gray-400" />
                      }
                    </AvatarFallback>
                  )}
                </Avatar>
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Camera className="w-4 h-4" />
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Add a profile photo to help others recognize you
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="displayName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name *
                </Label>
                <Input
                  id="displayName"
                  placeholder="Enter your full name"
                  value={formData.displayName}
                  onChange={(e) => handleInputChange("displayName", e.target.value)}
                  className="h-12 bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Username *
                </Label>
                <Input
                  id="username"
                  placeholder="Choose a unique username"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  className="h-12 bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  This will be your unique identifier
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            {/* <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Choose your role
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                How do you plan to use Sample Dekho?
              </p>
            </div> */}

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            <div
                className={cn(
                  "group cursor-pointer rounded-2xl p-6 transition-all duration-200 border-2 text-center",
                  formData.accountType === "MANUFACTURER"
                    ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg transform scale-105"
                    : "border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md hover:scale-102"
                )}
                onClick={() => handleAccountTypeSelect("MANUFACTURER")}
              >
                <div className={cn(
                  "w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-200",
                  formData.accountType === "MANUFACTURER"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20"
                )}>
                  <Building2 className="w-8 h-8" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Manufacturer
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400">
                  Upload and manage your products
                </p>
              </div>

              <div
                className={cn(
                  "group cursor-pointer rounded-2xl p-6 transition-all duration-200 border-2 text-center",
                  formData.accountType === "CUSTOMER"
                    ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg transform scale-105"
                    : "border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md hover:scale-102"
                )}
                onClick={() => handleAccountTypeSelect("CUSTOMER")}
              >
                <div className={cn(
                  "w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-200",
                  formData.accountType === "CUSTOMER"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20"
                )}>
                  <User className="w-8 h-8" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Customer
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400">
                  Browse and purchase wide range of products
                </p>
              </div>

              
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8 text-center">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-xl">
              <Check className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Welcome to Sample Dekho!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Your profile has been created successfully. Let's start exploring!
              </p>
              
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 max-w-md mx-auto border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 border-2 border-gray-200 dark:border-gray-700">
                    {formData.profileImage ? (
                      <AvatarImage src={formData.profileImage} alt="Profile" />
                    ) : (
                      <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                        {formData.displayName.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {formData.displayName}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      @{formData.username}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {formData.accountType === "CUSTOMER" ? "Fashion Enthusiast" : "Fashion Creator"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
            Welcome to Sample Dekho
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Let's create your profile in just a few steps
          </p>
        </div>

        {/* Main Card */}
        <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-0 shadow-2xl shadow-black/10">
          <CardContent className="p-8">
            {/* Progress Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                {STEPS.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 border-2",
                        currentStep >= step.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-500"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600"
                      )}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        step.id
                      )}
                    </div>
                    {index < STEPS.length - 1 && (
                      <div
                        className={cn(
                          "w-16 h-0.5 transition-all duration-200",
                          currentStep > step.id ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-300 dark:bg-gray-600"
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Info */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {STEPS.find(step => step.id === currentStep)?.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Step {currentStep} of {STEPS.length} - {STEPS.find(step => step.id === currentStep)?.description}
              </p>
            </div>

            {/* Step Content */}
            <div className="mb-8">
              {renderStepContent()}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              {currentStep < STEPS.length ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceedToNext()}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleComplete}
                  disabled={isLoading}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Setting up...
                    </>
                  ) : (
                    <>
                      Get Started
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}