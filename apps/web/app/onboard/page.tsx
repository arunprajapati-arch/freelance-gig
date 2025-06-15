import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Onboard from "@/components/Onboard";


export default async function Page() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        redirect("/login");
    }



    return(
      <Onboard
      initialData={{
        displayName: session.user.name || "",
        profileImage: session.user.image || null,
      }}
      />
    )
}