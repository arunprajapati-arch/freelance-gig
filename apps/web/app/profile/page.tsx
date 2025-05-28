import { Suspense } from "react";

import ProfileContent from "@/components/ProfileContent";



export default function Profile() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>}>
      <ProfileContent />
    </Suspense>
  );
}