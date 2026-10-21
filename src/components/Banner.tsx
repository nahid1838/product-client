
import { IoLogoFreebsdDevil } from "react-icons/io";

const Banner = () => {
  return (
    <section className=" container mx-auto relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 my-10 shadow-xl sm:px-10 sm:py-20 lg:px-16">
      {/* Background effects */}
      <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-orange-500/60 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-sky-500/60 blur-3xl" />

      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
            <IoLogoFreebsdDevil className="text-lg" />
            Your Product Management Platform
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build Something
            <span className="mt-2 block bg-gradient-to-r from-orange-400 via-rose-400 to-sky-400 bg-clip-text text-transparent">
              Extraordinary.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Create, manage, and organize your products with
            a simple and seamless experience. Everything you
            need, all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#createP">
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:shadow-orange-500/40">
              Create Product
              <span aria-hidden="true">→</span>
            </button>
            </a>

            <a href="#allP">
            <button className="rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-slate-500 hover:bg-white/10">
              Explore Products
            </button>
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: "✦",
              title: "Easy to Create",
              description: "Add your products with ease.",
            },
            {
              icon: "◇",
              title: "Stay Organized",
              description: "Keep everything in one place.",
            },
            {
              icon: "↗",
              title: "Manage Better",
              description: "Simplify your workflow.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.07]"
            >
              <span className="text-2xl text-orange-400">
                {item.icon}
              </span>
              <h3 className="mt-3 font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
