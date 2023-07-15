import { getItemsCount } from "@/lib/drizzle/functions/getItemsCount";
import MobileNavbarContainer from "./MobileNavbarContainer";

export default async function MobileNavbar() {
    const count = await getItemsCount();
    return <MobileNavbarContainer {...count} />
}
