"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "@/lib/auth";

export default function SigningUpPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      login();
      router.push("/dashboard");
    }, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col bg-bg-primary">
      {/* Logo — top left */}
      <div className="px-8 py-4">
        <Link
          href="/"
          className="text-xl font-semibold text-fg-primary tracking-tight"
        >
          LifeLedger
        </Link>
      </div>

      {/* Signing up message — centered */}
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        <p className="text-body-lg text-fg-secondary">
          Signing Up via AWS Cognito
        </p>

        {/* Loading indicator */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent animate-thinking-dot-1" />
          <span className="h-2 w-2 rounded-full bg-accent animate-thinking-dot-2" />
          <span className="h-2 w-2 rounded-full bg-accent animate-thinking-dot-3" />
        </div>
      </div>
    </div>
  );
}
