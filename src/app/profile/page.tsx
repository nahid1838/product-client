
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const ProfilePage = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const handleUpdateUser = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;

        const { error } = await authClient.updateUser({
            name: name.trim()
        });

        if (error) {
            console.log(error);
            return;
        }

        router.refresh();
    };

    return (
        <div className="flex justify-center py-10">
            <div>
                <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-orange-500">
                        Update Your Profile
                    </h3>

                    <div className="flex flex-col items-center gap-0.5">
                        <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-orange-200 to-sky-300 text-4xl font-bold uppercase text-sky-800 shadow-md ring-1 ring-white">
                            {session?.user.name?.charAt(0) || "U"}
                        </span>

                        <h3 className="truncate text-2xl font-bold tracking-wide text-slate-800">
                            {session?.user.name}
                        </h3>

                        <p className="font-medium text-slate-500">
                            Welcome back!
                        </p>
                    </div>
                </div>

                <Card className="mt-5">
                    <CardHeader>
                        <p className="text-lg font-semibold text-green-700">
                            Change Your Name
                        </p>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleUpdateUser}>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    defaultValue={session?.user.name ?? ""}
                                    required
                                />
                            </div>

                            <Button type="submit" className="mt-2 w-full">
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <Link href={"/"}>
                    <p className="flex items-center gap-2 text-gray-500 mt-5 justify-center cursor-pointer px-3 py-1 rounded-lg hover:bg-gray-300"><span><FaArrowLeftLong /></span>Back To Home Page <span><FaArrowRightLong /></span></p>
                </Link>
            </div>
        </div>
    );
};

export default ProfilePage;
