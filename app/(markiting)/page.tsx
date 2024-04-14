import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { MarkitingVideo } from "./markiting-video";
import { BookOpen, Loader, PencilLine, Radio } from "lucide-react";
import Link from "next/link";
import { MarkitingCard } from "./card";

export default function Home() {
  return (
    <div className="max-w-screen-lg flex flex-col items-center w-full">
      <div className="primaryBlob hidden lg:block w-[200px] h-[200px] absolute right-0" />
      <div className="primaryBlobOutline hidden lg:block w-[200px] h-[200px] absolute top-[250px] left-0" />
      <div className="primaryBlob hidden lg:block w-[200px] h-[200px] absolute top-[300px] left-10" />
      <div className="OctagonShape hidden lg:block absolute top-[400px] right-[200px]" />
      <div className="plus absolute hidden lg:block top-[600px] left-[200px]" />
      <div className="text-center lg:w-[650px] md:w-[500px] w-[90%]">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-extrabold">
          Learn and Master French By Expert Teacher with{" "}
          <span className="text-purple-500">MOSIEUR</span>
        </h1>
        <p className="text-black/60 md:text-[15px] text-sm font-bold mt-7">
          MONSIEUR is an online platefrom that teaches currecurim french with
          simple and interactive learning experiance with examples, quizes and
          homeworks !
        </p>
      </div>
      <div className="flex space-x-10 mt-10">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button
                variant={"primary"}
                className="font-bold md:w-30 w-[140px] shadow-lg"
                size={"lg"}
              >
                get started
              </Button>
            </SignInButton>
            <Button
              variant={"primaryOutline"}
              size={"lg"}
              className="font-bold md:w-30 w-[140px]"
              asChild
            >
              <Link href="/about">learn more</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button
              variant={"primary"}
              size={"lg"}
              className="font-bold w-[250px] shadow-lg"
              asChild
            >
              <Link href="/learn">continue learning</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
      <MarkitingVideo className="mt-14" />
      <div className="mt-20 flex flex-wrap justify-center [&>*]:m-5 text-center [&>*]:cursor-default">
        <MarkitingCard
          title="Online Learning"
          description="Learn anytine and anyware you like by recoreded courses and exercises"
        >
          <BookOpen className="text-purple-500" />
        </MarkitingCard>
        <MarkitingCard
          title="Solve Exersices"
          description="Solve alot of exersices in every lesson"
        >
          <PencilLine className="text-purple-500" />
        </MarkitingCard>
        <MarkitingCard
          title="Live Lectures"
          description="Join live lecures made by teacher every week and interacte with it"
        >
          <Radio className="text-purple-500" />
        </MarkitingCard>
      </div>
    </div>
  );
}
