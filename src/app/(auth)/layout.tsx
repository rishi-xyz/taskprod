import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AuthLayoutProps {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <div className="flex flex-row items-center gap-1">
                        <Image src={"/taskprod.png"} alt="logo" width={70} height={20} />
                        <h1 className="text-xl md:text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#4B2E15] to-[#8B4513]">
                            Taskprod
                        </h1>
                    </div>
                    <Button variant={"outline"} className="rounded-xl m-2">
                        Sign Up
                    </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout