import { getItemsCount } from "@/lib/getItemsCount";
import MobileNavbarContainer from "./MobileNavbarContainer";

export default async function MobileNavbar() {
    const count = await getItemsCount();
    return <MobileNavbarContainer {...count} />
}
