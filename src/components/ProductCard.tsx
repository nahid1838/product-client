import { IProduct } from "@/lib/type";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { EditUserDialog } from "./EditUserDialog";
import { Button } from "./ui/button";
import { DeleteProductDialog } from "./DeleteProductDialog";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gray-50 p-5 sm:p-6">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          Product
        </span>

        <Image
          src={product.product_image_url}
          alt={product.product_name}
          width={400}
          height={300}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-gray-800 transition-colors group-hover:text-orange-600 sm:text-lg">
          {product.product_name}
        </h2>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500 sm:text-sm">Price</p>

            <p className="mt-1 text-xl font-bold text-orange-600 sm:text-2xl">
              ৳{Number(product.product_price).toLocaleString("en-BD")}
            </p>
          </div>

          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-200 transition-colors group-hover:bg-orange-600">
            <ShoppingBag size={20} />
          </div>
        </div>

        <div className="mt-4 flex justify-between border-t border-gray-100 pt-3">
          <Link href={`/product/${product._id}`}>
            <Button
              className="bg-orange-500 text-white font-semibold hover:bg-orange-700 hover:text-white"
              variant="outline"
            >
              View Details
            </Button>
          </Link>

          <EditUserDialog product={product} />
          <DeleteProductDialog id={product._id}/>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
