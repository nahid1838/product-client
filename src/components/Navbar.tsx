"use client";

import { IoLogoFreebsdDevil } from "react-icons/io";
import { Button } from "./ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signIn");
          router.refresh();
        },
      },
    });
  };

  return (
    <nav className="border-b border-gray-100 bg-white shadow-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:gap-0">

        {/* Logo */}
        <div className="group">
          <h3 className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight">
            <Link href="/" aria-label="Create Product Home">
              <span className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 via-orange-50 to-sky-100 p-2.5 text-sky-600 shadow-sm ring-1 ring-orange-200/70 transition-all duration-300 group-hover:rotate-6 group-hover:shadow-md">
                <IoLogoFreebsdDevil className="text-4xl" />
              </span>
            </Link>

            <span className="flex items-center gap-1.5">
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-extrabold text-transparent">
                Create
              </span>

              <span className="text-slate-800">
                Product
              </span>
            </span>
          </h3>
        </div>

        {/* Authentication Buttons */}
        <div>
          {isPending ? (
            <Button
              disabled
              className="px-5 py-4 font-semibold"
            >
              Loading...
            </Button>
          ) : session ? (
            <Button
              onClick={handleSignOut}
              className="bg-green-500 px-5 py-4 font-semibold text-white hover:bg-green-700"
            >
              Sign Out
            </Button>
          ) : (
            <div className="flex gap-3">
              <Link href="/signIn">
                <Button className="bg-sky-500 px-5 py-4 font-semibold text-white hover:bg-sky-700">
                  Sign In
                </Button>
              </Link>

              <Link href="/signUp">
                <Button className="bg-green-500 px-5 py-4 font-semibold text-white hover:bg-green-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;