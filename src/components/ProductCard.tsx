import { IProduct } from "@/lib/type";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { EditUserDialog } from "./EditUserDialog";
import { Button } from "./ui/button";
import { DeleteProductDialog } from "./DeleteProductDialog";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gray-50 p-4 sm:p-6">
        <span className="absolute left-2 top-2 z-10 rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-semibold text-orange-600 sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
          Product
        </span>

        <Image
          src={product.product_image_url}
          alt={product.product_name}
          width={400}
          height={300}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-5">
        <h2 className="line-clamp-2 min-h-12 break-words text-sm font-semibold leading-6 text-gray-800 transition-colors group-hover:text-orange-600 sm:text-base md:text-lg">
          {product.product_name}
        </h2>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between gap-2 sm:gap-3">
          <div className="min-w-0">
            <p className="text-xs text-gray-500 sm:text-sm">
              Price
            </p>

            <p className="mt-1 break-words text-lg font-bold text-orange-600 sm:text-xl md:text-2xl">
              ৳{Number(product.product_price).toLocaleString("en-BD")}
            </p>
          </div>

          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white shadow-md shadow-orange-200 transition-colors group-hover:bg-orange-600 sm:size-11 sm:rounded-xl">
            <ShoppingBag size={18} className="sm:size-5" />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3 sm:gap-3">
          <Link
            href={`/product/${product._id}`}
            className="min-w-0 flex-1"
          >
            <Button
              className="w-full bg-orange-500 px-2 text-xs font-semibold text-white hover:bg-orange-700 hover:text-white sm:px-3 sm:text-sm"
              variant="outline"
            >
              View Details
            </Button>
          </Link>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <EditUserDialog product={product} />
            <DeleteProductDialog id={product._id} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;