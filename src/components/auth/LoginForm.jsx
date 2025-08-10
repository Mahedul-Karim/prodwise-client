import React, { useState } from "react";
import Logo from "../common/Logo";
import Container from "../common/Container";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "@/config/firebase.config";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        return toast.error("Invalid credential");
      }

      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocial = async () => {
    try {
      await signInWithGoogle();

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center border-b border-border dark:border-border/10 py-4">
        <Logo />
      </div>
      <Container className="p-4 flex flex-col items-center justify-center h-[calc(100%_-_73px)]">
        <Card className="w-full border-none shadow-none bg-transparent gap-4 max-w-[360px]">
          <CardHeader className="px-0">
            <CardTitle className="text-dark text-xl font-bold text-center">
              Login to your account
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label className="font-semibold text-dark">Email:</Label>
                <Input
                  type={"email"}
                  placeholder="Type your email address"
                  className="h-11 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium rounded-full dark:bg-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label className="font-semibold text-dark">Password:</Label>
                <Input
                  type={"password"}
                  placeholder="Type your password"
                  className="h-11 px-4 rounded-full placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm md:!text-base text-sm font-medium dark:bg-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Button
                className="w-full font-semibold h-10 rounded-full"
                disabled={isLoading}
              >
                {isLoading && <Loader className="animate-spin" />} Login
              </Button>
            </form>
          </CardContent>
          <CardFooter className="px-0 flex-col">
            <div className="flex items-center gap-2 w-full">
              <div className="h-[1.5px] border border-solid border-border grow" />
              <p className="text-dark/50">OR</p>
              <div className="h-[1.5px] border border-solid border-border grow" />
            </div>
            <div className="my-3 w-full">
              <Button
                variant="outline"
                className="bg-transparent font-semibold w-full border-border flex items-center gap-2 dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent text-dark/70 hover:text-dark/70 h-10 rounded-full"
                onClick={handleSocial}
              >
                <img src="/google.svg" alt="" className="size-5 invert-50" />
                Google
              </Button>
            </div>
            <p className="text-sm font-semibold text-dark self-start">
              New here?{" "}
              <Link to="/sign-up" className="text-primary hover:underline">
                Create an account
              </Link>
            </p>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
};

export default LoginForm;
