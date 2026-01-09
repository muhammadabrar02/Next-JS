import React from 'react'
import { useSignUp } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from 'react';
import { Label } from "@/components/ui/label";


function Signup() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [pendingVerification, setPendingVerification] = useState(false)
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    if (!isLoaded) {
        return null;
    }

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!isLoaded) {
            return;
        }


        try {
            await signUp.create({ emailAddress, password });

            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setPendingVerification(true);

        } catch (error: any) {
            console.log(JSON.stringify(error, null, 2));
            setError(error.errors[0].message);

        }

    }

    async function onPressVerify(e: React.FormEvent) {
        e.preventDefault();
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignup = await signUp.attemptEmailAddressVerification({ code });

            if (completeSignup.status !== "complete") {
                console.log(JSON.stringify(completeSignup, null, 2));
            }

            if (completeSignup.status === "complete") {
                console.log(JSON.stringify(completeSignup, null, 2));
            }

            if (completeSignup.status === "complete") {
                await setActive({ session: completeSignup.createdSessionId });
                router.push("/dashboard");
            }


        } catch (err: any) {

            console.log(JSON.stringify(err, null, 2));
            setError(err.errors[0].message);

        }

    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted px-4">
          
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-2xl font-semibold">
                        {pendingVerification ? "Verify your email" : "Create an account"}
                    </CardTitle>
                    <CardDescription>
                        {pendingVerification
                            ? "Enter the verification code sent to your email"
                            : "Sign up to get started with your account"}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    {!pendingVerification ? (
                        <form onSubmit={submit} className="space-y-4">
                            <Input
                                type="email"
                                placeholder="Email address"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                required
                            />

                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-primary"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            {error && (
                                <p className="text-sm text-destructive">{error}</p>
                            )}

                            <Button type="submit" className="w-full">
                                Create account
                            </Button>
                        </form>
                    ) : (
                        <form onSubmit={onPressVerify} className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Verification code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                            />

                            {error && (
                                <p className="text-sm text-destructive">{error}</p>
                            )}

                            <Button type="submit" className="w-full">
                                Verify & Continue
                            </Button>
                        </form>
                    )}
                </CardContent>

                {!pendingVerification && (
                    <CardFooter className="justify-center">
                        <p className="text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link
                                href="/sign-in"
                                className="font-medium text-primary hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </CardFooter>
                )}
            </Card>
        </div>
    )
}

export default Signup;
