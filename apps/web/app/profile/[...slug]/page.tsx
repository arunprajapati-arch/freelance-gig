import NewArrival from "@/components/NewArrival";
import ProfileInfo from "@/components/ProfileInfo";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";
import AppHeader from "@/components/Appheader";
import AddProductDialog from "@/components/product/AddProductDialog";


type Props = {
  params: Promise<{
    slug: string[]
  }>
}

export default async function Profile({ params }: Props) {
  const resolvedParams = await params;
  const username = resolvedParams.slug[0];
  if (!username) {
    return;
  }

  // Mock user data - replace with actual user data based on username
  const user = {
    name: username,
    email: `${username}@example.com`,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
      <AppHeader 
        
          />
      <div className="w-full max-w-6xl pt-4 md:pt-8 pb-4 md:pb-12 px-4 md:px-6 lg:px-8 mx-auto flex flex-col items-center gap-4 md:gap-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-6 md:gap-12">
          <ProfileInfo username={username} />
          <div className="w-full md:w-auto">
            <NewArrival />
          </div>
        </div>
        <FilterBar />
        <ProductGrid />
      </div>
      <div className="w-full">
      <AddProductDialog />
      </div>
    </div>
  );
}