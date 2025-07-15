"use client";
import { authClient } from "@/lib/auth-client";
import AppHeader from "@/components/Appheader";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import {
  ManufacturerStories,
} from "@/components/home";

import ProfileInfo from "@/components/ProfileInfo";
import NewArrival from "@/components/NewArrival";
import ProductGrid from "@/components/home/ProductGrid";
import { User, Follow, Product } from "@redb/db";

export default function Home() {
  const { data: session, isPending, error } = authClient.useSession();
  const router = useRouter();

  const [selectedManufacturer, setSelectedManufacturer] = useState<User | null>(null);
  const [followingManufacturers, setFollowingManufacturers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState<string | null>(null);

  console.log("followingManufacturers", followingManufacturers);

  const fetchProducts = useCallback(async (userId: string) => {
    try {
      setProductsLoading(true);
      setProductsError(null);
      const response = await axios.get(`/api/getProductByUserId?userId=${userId}`);
      const fetchedProducts = response.data.products || [];
      
      // Sort by creation date (most recent first)
      const sortedProducts = fetchedProducts
        .sort((a: Product, b: Product) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      
      setProducts(sortedProducts);
    } catch (err) {
      console.error("Failed to fetch products", err);
      setProductsError("Failed to load products");
      setProducts([]);
    } finally {
      setProductsLoading(false);
    }
  }, []);

  const fetchFollowingManufacturers = useCallback(async () => {
    try {
      const response = await axios.get("/api/getFollowers");
      // Extract the 'following' property from each object to get the actual User objects
      const manufacturers = response.data.map((item: { following: User }) => item.following);
      setFollowingManufacturers(manufacturers);
      
      // Set the first manufacturer as selected by default
      if (manufacturers.length > 0) {
        setSelectedManufacturer(manufacturers[0]);
      }
    } catch (err) {
      console.error("Failed to fetch following manufacturers", err);
    }
  }, []);

  useEffect(() => {
    if (session && !isPending && !error) {
      fetchFollowingManufacturers();
    }
  }, [session, isPending, error, fetchFollowingManufacturers]);

  // Fetch products when selected manufacturer changes
  useEffect(() => {
    if (selectedManufacturer?.id) {
      fetchProducts(selectedManufacturer.id);
    } else {
      setProducts([]);
      setProductsLoading(false);
      setProductsError(null);
    }
  }, [selectedManufacturer, fetchProducts]);

  if (isPending) return <div>Loading...</div>;

  if (!session || error) {
    router.push("/signin");
    return <div>Redirecting to login...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center gap-1 sm:gap-2 bg-rose-900 pt-2 sm:pt-4 pb-0">
      <AppHeader user={session.user as User} />

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 items-center bg-stone-50 min-h-screen rounded-t-xl sm:rounded-xl p-2 sm:p-4 md:pt-12 border border-stone-200 shadow-lg relative overflow-hidden">
        <div className="relative z-10 w-full">
          <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-6 items-center justify-center">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-3 sm:gap-4 md:gap-6 lg:gap-4  ">
              <ProfileInfo manufacturer={selectedManufacturer} />
              <NewArrival manufacturer={selectedManufacturer} products={products} loading={productsLoading} error={productsError} />
            </div>

            <ManufacturerStories
              setSelectedManufacturer={setSelectedManufacturer}
              manufacturers={followingManufacturers}
            />

            <ProductGrid manufacturer={selectedManufacturer} products={products} loading={productsLoading} error={productsError} />
          </div>
        </div>
      </div>
    </div>
  );
}
