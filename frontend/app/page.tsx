// 📄 /app/page.tsx
// Home login screen with built-in login functionality and redirect

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // TEMP: Simple hardcoded check for demo
    if (email === "admin@example.com" && password === "changeme123") {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Try admin@example.com / changeme123");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg w-full max-w-sm"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">🛡️ ThreatLens</h1>

        <div className="space-y-2 mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2 mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>
    </div>
  );
}
