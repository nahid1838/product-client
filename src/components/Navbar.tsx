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
            <div className="flex gap-1 items-center">
              <Link href={"/profile"}>
                <div className="group flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 via-orange-200 to-sky-300 text-xl font-bold uppercase text-sky-800 shadow-sm ring-1 ring-white transition-transform duration-300 group-hover:rotate-3">
                  {session.user.name?.charAt(0) || "U"}
                </span>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold tracking-wide text-slate-800">
                    {session.user.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    Welcome back!
                  </p>
                </div>

                <span className="ml-2 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </div>
              </Link>



              <Button
                onClick={handleSignOut}
                className="bg-orange-500 px-5 py-4 font-semibold text-white hover:bg-orange-700"
              >
                Sign Out
              </Button>
            </div>
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