import NewArrival from "@/components/NewArrival";
import ProfileInfo from "@/components/ProfileInfo";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/home/ProductGrid";
import AppHeader from "@/components/Appheader";
import ProfileProductGrid from "@/components/ProfilePage/ProfileProductGrid";

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


  return (
    <div className="min-h-screen flex flex-col gap-2 sm:gap-3 md:gap-4 bg-rose-900 pt-4 pb-0 ">
      <AppHeader user={user} />
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-stone-50 min-h-screen rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 pt-4 sm:pt-6 md:pt-8 lg:pt-12 border border-stone-200 shadow-sm sm:shadow-md lg:shadow-lg sticky top-0">
        <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto flex flex-col items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <ProfileInfo username={username} />
            <div className="w-full sm:w-auto">
              <NewArrival />
            </div>
          </div>
          <div className="w-full">
            <FilterBar />
          </div>
          <div className="w-full">
            <ProfileProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}