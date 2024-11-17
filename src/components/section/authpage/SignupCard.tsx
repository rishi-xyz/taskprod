import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DottedSeparator } from "@/components/ui/dotted-separator";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const SignupCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#4B2E15] to-[#8B4513]">
          Welcome to Taskprod
        </CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link href={"/privacy-policies"}>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#4B2E15] to-[#8B4513]">
              Privacy Policy
            </span>
          </Link>
          and{" "}
          <Link href={"/privacy-policies"}>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#4B2E15] to-[#8B4513]">
              Terms of Service
            </span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="p-7 space-y-4">
          <Input
            required
            type="text"
            value={""}
            onChange={() => {}}
            placeholder="Enter your username"
            disabled={false}
            className="rounded-xl"
          />
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Enter your email address"
            disabled={false}
            className="rounded-xl"
          />
          <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Enter your password"
            disabled={false}
            min={8}
            max={256}
            className="rounded-xl"
          />
          <Button
            variant={"secondary"}
            disabled={false}
            size="lg"
            className="w-full rounded-xl"
          >
            Sign Up
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
          Sign up with Google
        </Button>
        <Button
          disabled={false}
          variant={"secondary"}
          size={"lg"}
          className="w-full rounded-xl"
        >
          <FaGithub className="mr-2 size-5" />
          Sign up with Github
        </Button>
      </CardContent>
    </Card>
  );
};
