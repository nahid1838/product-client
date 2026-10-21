import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

const SignUpPage = () => {
    return (
        <div className="container mx-auto flex justify-center py-15">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>SignUp to create an account</CardTitle>
                    <CardDescription>
                        If you already have an account do signIn
                    </CardDescription>
                    <CardAction>
                        <Link href={"/signIn"}>
                            <Button className="text-white bg-black" variant="link">Sign In</Button>
                        </Link>
                    </CardAction>
                </CardHeader>
                <form>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="name"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2 pb-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div >
    );
};

export default SignUpPage;