import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DottedSeparator } from "@/components/ui/dotted-separator"
import { Input } from "@/components/ui/input"
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"

export const SigninCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome Back!
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <form className="p-7 space-y-4">
                    <Input
                        required
                        type="email"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter your email address"
                        disabled={false}
                        className="rounded-xl"
                    />
                    <Input
                        required
                        type="password"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter your password"
                        disabled={false}
                        min={8}
                        max={256}
                        className="rounded-xl"
                    />
                    <Button variant={"secondary"} disabled={false} size="lg" className="w-full rounded-xl">
                        Login
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full rounded-xl"
                >
                    <FcGoogle className="mr-2 size-5" />
                    Login with Google
                </Button>
                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full rounded-xl"
                >
                    <FaGithub className="mr-2 size-5"/>
                    Login with Github
                </Button>
            </CardContent>
        </Card>
    )
}
