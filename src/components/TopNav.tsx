import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <div className="border-border flex h-12 items-center justify-between border-b px-4">
      <span>Brand</span>
      <div className="flex items-center gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/something">Something</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
}
