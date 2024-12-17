"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { AuthForm } from "@/components/auth/auth-form";
import { ROUTES } from "@/lib/config";

export default function LoginPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false); // Prevent UI rendering issues during redirect

  useEffect(() => {
    if (!isLoading && user) {
      setIsRedirecting(true);
      router.push(ROUTES.USER.DASHBOARD);
    }
  }, [user, isLoading, router]);

  if (isLoading || isRedirecting) {
    return (
      <div className="flex items-center justify-center h-screen">
        {isRedirecting ? "Redirecting..." : "Loading..."}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email to sign in to your account
        </p>
      </div>
      <AuthForm type="login" />
      <p className="px-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}
