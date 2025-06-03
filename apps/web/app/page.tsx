import { prisma } from "@redb/db";
import SignIn from "@/components/sign-in";

export default async function Home() {
  await prisma.$connect();
  console.log("Connected to database");
  return (
    <div>
      <h1>Hello World</h1>
      <SignIn />
    </div>
  )
}