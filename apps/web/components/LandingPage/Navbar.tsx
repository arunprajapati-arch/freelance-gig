import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight, ChevronRight, Home, LinkIcon, Store } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" flex justify-between items-center px-8">
        <div className="flex items-center gap-2">
            <Store className="w-6 h-6" />
            <h1 className="text-3xl font-bold tracking-tight">WholesaleDukaan</h1>
        </div>
        <div className="flex items-center gap-6">
            <Link href="/login" className="flex items-center  text-md font-medium cursor-pointer hover:underline">Login
            <ArrowUpRight className=""  />
            </Link>
            <Button className="text-md px-6  font-semibold bg-orange-500 text-orange-100 shadow-md shadow-orange-100 cursor-pointer hover:bg-orange-600">Join
            
            </Button>
        </div>
    </div>
  );
}