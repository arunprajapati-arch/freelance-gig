import NewArrival from "@/components/NewArrival";
import ProfileInfo from "@/components/ProfileInfo";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";
import Appbar from "@/components/Appbar";

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




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-6xl pt-4 md:pt-8 pb-4 md:pb-12 px-4 md:px-6 lg:px-8 mx-auto flex flex-col items-center gap-4 md:gap-10">
        <Appbar />
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-6 md:gap-12">
          <ProfileInfo username={username} />
          <div className="w-full md:w-auto">
            <NewArrival />
          </div>
        </div>
        <FilterBar />
        <ProductGrid />
      </div>
    </div>
  );
}