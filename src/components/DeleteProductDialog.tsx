"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "./ui/dialog";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

export function DeleteProductDialog({ id }: { id: string }) {
  const router = useRouter();

  const handleDeleteProduct = async () => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    router.refresh();

    toast.success("Product deleted Successfully!", {
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
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button className="font-semibold" variant="destructive">
            Delete
          </Button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <DialogClose
            render={
              <AlertDialogAction onClick={handleDeleteProduct}>
                Continue
              </AlertDialogAction>
            }
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
