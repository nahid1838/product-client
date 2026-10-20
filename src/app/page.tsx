import AddProductForm from "@/components/AddProductForm";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/lib/type";

export default async function Home() {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  return (
    <div>
      <AddProductForm></AddProductForm>

      <div className="py-20">
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product: IProduct) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}
