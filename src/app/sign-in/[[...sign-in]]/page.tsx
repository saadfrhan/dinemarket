import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="flex justify-center items-center h-[90vh]">
    <SignIn />
  </div>;
}