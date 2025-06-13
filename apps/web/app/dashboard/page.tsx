import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Dashboard() {
    const session = await auth.api.getSession({
        headers: await headers()
    });


console.log(session?.user.type);

    return (
        <div>
            
            {session?.user?.type}
            <div>{JSON.stringify(session, null, 2)}</div>
        </div>
    );
}