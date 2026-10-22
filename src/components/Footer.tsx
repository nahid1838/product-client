
import Link from "next/link";
import {
  PackagePlus,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { IoLogoFreebsdDevil } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 via-orange-50 to-sky-100 p-2.5 text-sky-600 shadow-sm ring-1 ring-orange-200/70 transition-all duration-300 group-hover:rotate-6 group-hover:shadow-md">
                              <IoLogoFreebsdDevil className="text-4xl" />
                            </span>
              <span className="text-2xl font-extrabold tracking-tight text-slate-800">
                Create<span className="text-sky-600">Product</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-slate-500">
              A simple and powerful way to create, manage, and organize
              your products. Everything you need, all in one place.
            </p>

            <div className="flex gap-3 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
              >
                <TbBrandLinkedinFilled size={19} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
              >
                <FaFacebook size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-bold text-slate-800">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/" className="transition hover:pl-1 hover:text-sky-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:pl-1 hover:text-sky-600">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/create-product" className="transition hover:pl-1 hover:text-sky-600">
                  Create Product
                </Link>
              </li>
              <li>
                <Link href="/profile" className="transition hover:pl-1 hover:text-sky-600">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-base font-bold text-slate-800">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/about" className="transition hover:pl-1 hover:text-sky-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:pl-1 hover:text-sky-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:pl-1 hover:text-sky-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:pl-1 hover:text-sky-600">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
              <span className="mb-3 inline-flex rounded-lg bg-sky-100 p-2 text-sky-600">
                <PackagePlus size={22} />
              </span>

              <h3 className="text-lg font-bold text-slate-800">
                Ready to get started?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Start adding your products and keep everything organized.
              </p>

              <Link
                href="/create-product"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-sky-200 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Create a Product
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500"> CreateProduct. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            Made with <Heart size={15} className="fill-rose-500 text-rose-500" /> for better product management.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
