"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React from "react";
import { Bounce, toast } from "react-toastify";

const AddProductForm = () => {
  const router = useRouter();

  const handleOnsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    router.refresh();

    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const result = await res.json();

    toast.success("Product added Successfully!", {
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
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-orange-50 px-4 py-10">
      <Card className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
        <CardHeader className="space-y-2 border-b bg-white px-6 py-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <CardTitle className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
              Create Product
            </CardTitle>

            <CardAction>
              <Button
                type="button"
                variant="outline"
                className="border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700"
              >
                Product Info
              </Button>
            </CardAction>
          </div>

          <CardDescription className="text-sm leading-6 text-slate-500">
            Add your product details below to create a new product.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleOnsubmit} autoComplete="off">
          <CardContent className="space-y-5 px-6 pt-6 sm:px-8">
            <div className="grid gap-2">
              <Label htmlFor="name" className="font-medium text-slate-700">
                Product Name
              </Label>

              <Input
                id="name"
                name="product_name"
                type="text"
                placeholder="Enter product name"
                autoComplete="off"
                required
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
                placeholder="Enter product price"
                min="0"
                step="0.01"
                autoComplete="off"
                required
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
                placeholder="https://example.com/image.jpg"
                autoComplete="off"
                required
                className="h-11 rounded-lg border-slate-200 bg-slate-50/50 focus-visible:border-orange-400 focus-visible:ring-orange-400/20"
              />

              <p className="text-xs text-slate-400">
                Paste a valid URL for your product image.
              </p>
            </div>
          </CardContent>

          <CardFooter className="px-6 pb-7 pt-5 sm:px-8">
            <Button
              type="submit"
              className="h-11 w-full cursor-pointer rounded-lg bg-orange-500 font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-[0.98]"
            >
              Create Product
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
};

export default AddProductForm;
