import {
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import CartIcon from '../Navigation/CartIcon';
import { getItemsCount } from '@/lib/drizzle/functions/getItemsCount';

export default async function UserBtn() {
  return <>
    <UserButton afterSignOutUrl='/' />
    <SignedIn>
      <CartIcon items_count={(await getItemsCount()).items_count} />
    </SignedIn>
    <SignedOut>
      <CartIcon items_count={0} />
    </SignedOut>
  </>;
}