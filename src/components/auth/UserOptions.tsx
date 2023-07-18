import {
  SignedIn,
  SignedOut,
  SignInButton
} from '@clerk/nextjs';
import UserBtn from './UserBtn';
import { Button } from '../ui/button';

export default function UserOptions() {
  return <>
    <SignedIn>
      <UserBtn />
    </SignedIn>
    <SignedOut>
      <SignInButton>
        <Button>
          Sign in
        </Button>
      </SignInButton>
    </SignedOut>
  </>;
}