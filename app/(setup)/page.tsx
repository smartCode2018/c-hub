import InitialModal from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { InitialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
    const profile = await InitialProfile();
    
    const server = await db.server.findFirst({
        where: {
            members:{
                some:{
                    profileId: profile.id
                }
            }
        }
    });

    if (server) {
        return redirect(`/servers/${server.id}`);
        console.log("here1");
    }

    console.log("here2");

    return <InitialModal/>
}
 
export default SetupPage;