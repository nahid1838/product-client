
import AddProductForm from "@/components/AddProductForm";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/lib/type";
import { Suspense } from "react";

async function ProductsList() {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  return (
    <div id="allP" className="py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Banner/>
      <AddProductForm />

      <Suspense fallback={<h2>Data is loading...</h2>}>
        <ProductsList />
      </Suspense>
    </div>
  );
}
