import { AppHeader } from "@/components/common";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  // Mock user data - replace with actual session data
  const user = {
    name: "Your Profile",
    email: "user@example.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader 
        showSearch={false}
        user={user}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600 mb-8">Manage your account settings and preferences.</p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">{user.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Account Information</h4>
                <p className="text-gray-600 text-sm">Update your personal details and contact information.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Privacy Settings</h4>
                <p className="text-gray-600 text-sm">Control who can see your profile and activity.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Notifications</h4>
                <p className="text-gray-600 text-sm">Manage your notification preferences.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                <p className="text-gray-600 text-sm">Update your password and security settings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 