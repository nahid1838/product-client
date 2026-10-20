
import Image from "next/image";
import { ShoppingBag, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Link from "next/link";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const res = await fetch(
    `http://localhost:5000/products/${productId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product = await res.json();

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50/60 via-white to-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500sm:mb-8">
          <Link href="/"><span className="hover:text-orange-600">Home</span></Link>
          <span className="mx-2">/</span>
          <span className="hover:text-orange-600">Products</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-orange-600">
            Product Details
          </span>
        </div>

        {/* Product Details */}
        <section className="grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/40 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-100 p-6 sm:min-h-96 sm:p-10 lg:min-h-[520px]">
            <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md sm:left-8 sm:top-8">
              Product Details
            </span>

            <div className="absolute h-48 w-48 rounded-full bg-orange-200/30 blur-3xl sm:h-72 sm:w-72" />

            <Image
              src={product.product_image_url}
              alt={product.product_name}
              width={600}
              height={600}
              priority
              className="relative z-10 max-h-72 w-full object-contain transition-transform duration-500 hover:scale-105 sm:max-h-96"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Discover Your Favorite
            </p>

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              {product.product_name}
            </h1>

            <div className="my-6 h-1 w-16 rounded-full bg-orange-500" />

            <p className="text-sm leading-7 text-gray-500 sm:text-base">
              Explore this product and enjoy a simple, convenient
              shopping experience. Check the product details below
              before making your choice.
            </p>

            {/* Price */}
            <div className="mt-7 rounded-2xl border border-orange-100 bg-orange-50/70 p-5 sm:p-6">
              <p className="text-sm font-medium text-gray-500">
                Product Price
              </p>

              <p className="mt-2 break-words text-3xl font-extrabold text-orange-600 sm:text-4xl">
                ৳{Number(product.product_price).toLocaleString("en-BD")}
              </p>

              <p className="mt-2 text-xs text-gray-500">
                Price displayed for this product
              </p>
            </div>

            {/* Product Features */}
            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Quality Product
                  </p>
                  <p className="text-xs text-gray-500">
                    Explore product information
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Truck size={21} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Convenient Shopping
                  </p>
                  <p className="text-xs text-gray-500">
                    Browse products with ease
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <RotateCcw size={21} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Product Information
                  </p>
                  <p className="text-xs text-gray-500">
                    Review the details before purchasing
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              className="mt-8 flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/30 active:translate-y-0"
            >
              <ShoppingBag size={20} />
              Explore Product
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              Thank you for visiting our store.
            </p>
          </div>
        </section>

        {/* Bottom Section */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
            <ShieldCheck className="mx-auto mb-3 text-orange-500" size={27} />
            <h2 className="font-semibold text-gray-800">
              Product Quality
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Check the product information
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
            <Truck className="mx-auto mb-3 text-orange-500" size={27} />
            <h2 className="font-semibold text-gray-800">
              Easy Shopping
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              A smooth browsing experience
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
            <ShoppingBag className="mx-auto mb-3 text-orange-500" size={27} />
            <h2 className="font-semibold text-gray-800">
              Explore More
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Find products that suit you
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;