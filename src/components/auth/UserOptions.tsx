import {
  SignedIn,
  SignedOut,
  SignInButton
} from '@clerk/nextjs';
import UserBtn from './UserBtn';

export default async function UserOptions() {
  return <>
    <SignedIn>
      <UserBtn />
    </SignedIn>
    <SignedOut>
      <SignInButton />
    </SignedOut>
  </>;
}