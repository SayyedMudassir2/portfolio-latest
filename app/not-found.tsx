"use client";

import { ArrowLeft, Home, Terminal } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * NotFound Page Component
 * Displays a 404 error message with navigation options.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50/50 dark:bg-gray-900/50 p-4">
      {/* Centered Card Container */}
      <Card className="w-full max-w-3xl text-center bg-white dark:bg-gray-800 shadow-md dark:shadow-black/40">
        <CardContent className="mt-16">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-destructive/90 dark:bg-destructive/80 p-6">
              <Terminal
                className="h-12 w-12 text-destructive-foreground dark:text-destructive-foreground"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Error Heading */}
          <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            404 - Page Not Found
          </h1>

          {/* Error Description */}
          <p className="flex flex-col gap-4 sm:flex-row sm:justify-center text-gray-700 dark:text-gray-300">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted. <br />
            But don&apos;t worry, you can always find your way back to safety.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Go to Home Page */}
            <Button asChild>
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" /> Go to HomePage
              </Link>
            </Button>

            {/* Go Back to Previous Page */}
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
