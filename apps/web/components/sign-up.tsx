"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Loader2, Mail, Lock, User } from "lucide-react";
import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <div className="min-h-screen flex items-start max-md:pt-10 md:items-center justify-center bg-gradient-to-b from-rose-900 to-rose-950 p-2 sm:p-4">
      <Card className="w-full max-w-md sm:max-w-xl bg-stone-50 border border-stone-200 shadow-lg sm:shadow-xl rounded-lg sm:rounded-xl">
        <CardHeader className="space-y-1.5 sm:space-y-2 p-3 sm:p-4 md:p-6">
          <div className="flex flex-col items-center justify-center text-center">
            <CardTitle className="text-xl lg:text-3xl font-semibold text-red-900 tracking-tight leading-tight">
              Join Wholesale Dukaan
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
            Create your account to start your wholesale journey
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-2.5 sm:space-y-3 p-3 sm:p-4 md:p-6 pt-0">
          <div className="space-y-2 sm:space-y-2.5">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-800 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-900" />
                Full Name
              </Label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full h-9 sm:h-10 md:h-11 bg-white border border-stone-300 focus:border-red-900 focus:ring-2 focus:ring-red-900/20 focus:outline-none rounded-md sm:rounded-lg text-sm text-gray-800 placeholder:text-gray-400 px-3 py-2"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-800 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-900" />
                Email Address
              </Label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full h-9 sm:h-10 md:h-11 bg-white border border-stone-300 focus:border-red-900 focus:ring-2 focus:ring-red-900/20 focus:outline-none rounded-md sm:rounded-lg text-sm text-gray-800 placeholder:text-gray-400 px-3 py-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="text-xs sm:text-sm font-medium text-gray-800 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-900" />
                Password
              </Label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                className="w-full h-9 sm:h-10 md:h-11 bg-white border border-stone-300 focus:border-red-900 focus:ring-2 focus:ring-red-900/20 focus:outline-none rounded-md sm:rounded-lg text-sm text-gray-800 placeholder:text-gray-400 px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-xs sm:text-sm font-medium text-gray-800 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-900" />
                Confirm Password
              </Label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                autoComplete="new-password"
                className="w-full h-9 sm:h-10 md:h-11 bg-white border border-stone-300 focus:border-red-900 focus:ring-2 focus:ring-red-900/20 focus:outline-none rounded-md sm:rounded-lg text-sm text-gray-800 placeholder:text-gray-400 px-3 py-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="border-stone-300 data-[state=checked]:bg-red-900 data-[state=checked]:border-red-900"
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked === true)}
              />
              <Label htmlFor="terms" className="text-xs sm:text-sm text-gray-700 font-medium cursor-pointer">
                I agree to the{" "}
                <Link href="/terms" className="text-red-900 hover:text-red-800 underline underline-offset-2">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-red-900 hover:text-red-800 underline underline-offset-2">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full h-9 sm:h-10 md:h-11 bg-gradient-to-b from-rose-700 to-rose-900 hover:from-rose-800 hover:to-rose-950 text-rose-100 font-semibold rounded-md sm:rounded-lg shadow-md shadow-rose-900/20 transition-all duration-300 tracking-tight text-sm"
            //   disabled={loading || !agreeToTerms}
              onClick={async () => {
                if (password !== confirmPassword) {
                  alert("Passwords don't match!");
                  return;
                }
                // Add your signup logic here
                setLoading(true);
                // Simulate API call
                setTimeout(() => {
                  setLoading(false);
                }, 2000);
              }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Create Your Account"
              )}
            </Button>

            <div className="relative my-2 sm:my-3">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-stone-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-stone-50 px-2 sm:px-3 text-gray-500 font-medium">Or continue with</span>
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Button
                variant="outline"
                className="w-full h-9 sm:h-10 md:h-11 bg-white border-stone-300 hover:bg-stone-50 hover:border-red-900/30 text-gray-800 font-medium rounded-md sm:rounded-lg transition-all duration-300 text-sm"
                disabled={loading}
                onClick={async () => {
                  // Add your Google signup logic here
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 2000);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 262" className="mr-2">
                  <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                  <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                  <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path>
                  <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                </svg>
                Continue with Google
              </Button>
              
              <Button
                variant="outline"
                className="w-full h-9 sm:h-10 md:h-11 bg-white border-stone-300 hover:bg-stone-50 hover:border-red-900/30 text-gray-800 font-medium rounded-md sm:rounded-lg transition-all duration-300 text-sm"
                disabled={loading}
                onClick={async () => {
                  // Add your Facebook signup logic here
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 2000);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592c.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
                    fill="#1877F2"
                  />
                </svg>
                Continue with Facebook
              </Button>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-3 sm:p-4 md:p-6 pt-0">
          <p className="text-xs sm:text-sm text-gray-600 text-center w-full">
            Already have an account?{" "}
            <Link href="/signin" className="text-red-900 hover:text-red-800 font-semibold underline underline-offset-2 transition-colors">
              Sign in here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
} 