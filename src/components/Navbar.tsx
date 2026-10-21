import { IoLogoFreebsdDevil } from "react-icons/io";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between py-3 items-center">
        <div className="group">
          <h3 className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight">
            <Link href={"/"}>
            <span className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 via-orange-50 to-sky-100 p-2.5 text-sky-600 shadow-sm ring-1 ring-orange-200/70 transition-all duration-300 group-hover:rotate-6 group-hover:shadow-md">
              <IoLogoFreebsdDevil className="text-4xl" />
            </span>
            </Link>

            <span className="flex items-center gap-1.5">
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-extrabold text-transparent">
                Create
              </span>
              <span className="text-slate-800 dark:text-white">Product</span>
            </span>
          </h3>
        </div>

        <div className="flex gap-3">
            <Button className="px-5 py-4 bg-sky-500 hover:bg-sky-700 font-semibold">Sign In</Button>
            <Button className="px-5 py-4 bg-green-700 hover:bg-green-500 font-semibold">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
