import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-full h-20 px-4 border-b-2 border-slate-200">
      <div className="lg:max-w-screen-lg h-full flex justify-between items-center m-auto ">
        <div>
          <Image height={120} width={120} src="/logo.png" alt="logo" />
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button variant={"ghost"} size={"lg"}>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
};
