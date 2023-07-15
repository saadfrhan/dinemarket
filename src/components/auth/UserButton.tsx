import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton
} from '@clerk/nextjs';

export default function UserBtn() {
  return <>
    <SignedIn>
      <UserButton afterSignOutUrl='/' />
    </SignedIn>
    <SignedOut>
      <SignInButton />
    </SignedOut>
  </>;
}