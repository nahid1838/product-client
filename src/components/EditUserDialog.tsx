"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IProduct } from "@/lib/type";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

export function EditUserDialog({ product }: { product: IProduct }) {
  const router = useRouter();

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    router.refresh();

    const res = await fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    toast.success(`${product.product_name}'s info updated successfully!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            className="bg-orange-500 text-white font-semibold hover:bg-orange-700 hover:text-white"
            variant="outline"
          >
            Edit Info
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your product here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleOnSubmit}>
          <FieldGroup className="space-y-5 px-6 pt-6 sm:px-8">
            <div className="grid gap-2">
              <Label htmlFor="name" className="font-medium text-slate-700">
                Product Name
              </Label>

              <Input
                id="name"
                name="product_name"
                type="text"
                defaultValue={product.product_name}
                className="h-11 rounded-lg border-slate-200 bg-slate-50/50 focus-visible:border-orange-400 focus-visible:ring-orange-400/20"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="price" className="font-medium text-slate-700">
                Product Price
              </Label>

              <Input
                id="price"
                name="product_price"
                type="number"
                defaultValue={product.product_price}
                min="0"
                step="0.01"
                className="h-11 rounded-lg border-slate-200 bg-slate-50/50 focus-visible:border-orange-400 focus-visible:ring-orange-400/20"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="imageUrl" className="font-medium text-slate-700">
                Product Image URL
              </Label>

              <Input
                id="imageUrl"
                name="product_image_url"
                type="url"
                defaultValue={product.product_image_url}
                className="h-11 rounded-lg border-slate-200 bg-slate-50/50 focus-visible:border-orange-400 focus-visible:ring-orange-400/20"
              />

              <p className="text-xs text-slate-400">
                Paste a valid URL for your product image.
              </p>
            </div>
          </FieldGroup>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <DialogClose render={<Button type="submit">Save changes</Button>} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
