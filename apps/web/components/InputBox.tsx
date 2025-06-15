"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "better-auth";

export function InputBox({ user }: { user: User }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className=" mx-auto w-full h-full flex flex-col items-center justify-center rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      
      
      <Avatar className="w-24 h-24">
      <AvatarImage src={user.image || ""} />
      <AvatarFallback>
        {user.name?.charAt(0) || "U"}
      </AvatarFallback>
     </Avatar>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="username" type="text" />
        </LabelInputContainer>

        
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
