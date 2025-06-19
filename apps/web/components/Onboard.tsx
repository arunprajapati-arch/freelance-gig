'use client';

import { completeOnboarding } from "@/app/actions/onboard";
import { useActionState } from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User, Camera, ArrowRight, Loader2 } from "lucide-react";


const initialState = {
  success: false,
  message: "",
}

export default function OnboardClient({
  initialData,
}: {
  initialData: {
    displayName: string;
    profileImage: string | null;
  };
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState(initialData.profileImage);
  const [accountType, setAccountType] = useState<"MANUFACTURER" | "CLIENT" | null>(null);
  const [state, formAction, isPending] = useActionState(completeOnboarding, initialState);

  //image upload is incorrect handle later

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4">
      <Card className="w-full  max-w-xl p-4">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
          <CardDescription>Tell us about yourself to get started</CardDescription>
        </CardHeader>
        
        <CardContent>
          <form action={formAction} className="space-y-6">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  {profileImage ? (
                    <AvatarImage src={profileImage} alt="profile" className="object-cover" />
                  ) : (
                    <AvatarFallback className="text-lg">
                      {initialData.displayName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={() => fileRef.current?.click()}
                  className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full"
                >
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">Change profile picture</span>
                </Button>
              </div>
              <input
                ref={fileRef}
                type="file"
                name="profileImage"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <input type="hidden" name="profileImage" value={profileImage ?? ""} />
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="displayName">Full Name</Label>
                <Input
                  id="displayName"
                  name="displayName"
                  defaultValue={initialData.displayName}
                  required
                />
              </div>

              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  required
                />
              </div>

              {/* Account Type */}
              <div className="space-y-3">
                <Label>Account Type</Label>
                <div className="grid grid-cols-2 gap-4">
                  {["MANUFACTURER", "CLIENT"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setAccountType(type as any)}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                        accountType === type
                          ? "border-primary bg-accent"
                          : "border-muted-foreground/20 hover:border-muted-foreground/40"
                      }`}
                    >
                      <div className={`p-2 rounded-md ${
                        accountType === type ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}>
                        {type === "MANUFACTURER" ? (
                          <Building2 className="h-5 w-5" />
                        ) : (
                          <User className="h-5 w-5" />
                        )}
                      </div>
                      <span className="text-sm font-medium">{type}</span>
                    </button>
                  ))}
                </div>
                <input type="hidden" name="accountType" value={accountType ?? ""} />
              </div>
            </div>

            {/* Error Message */}
            {state.message && (
              <div className={`rounded-lg border ${state.success ? "border-green-500" : "border-destructive/50"} ${state.success ? "bg-green-50" : "bg-destructive/10"} p-3`}>
                <p className={`text-sm ${state.success ? "text-green-500" : "text-destructive"}`}>{state.message}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Setting up...
                </>
              ) : (
                <>
                  Complete Setup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
