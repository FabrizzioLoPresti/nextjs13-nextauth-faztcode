"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const AuthButton = (props: Props) => {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <div className="flex flex-row gap-4 items-center">
        <Link href="/dashboard">Dashboard</Link>
        <div className="flex flex-row items-center gap-2">
          <Image
            src={session.user.image ?? ""}
            alt={session.user.name ?? ""}
            width={32}
            height={32}
            className="rounded-full"
          />
          <p>{session.user.name}</p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
};

export default AuthButton;
