"use client";

import { ArrowLeft, Home, RefreshCw, ServerCrash } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Error Page Component
 * Displays a 500 Internal Server Error message with navigation options.
 */
export default function Error() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 p-4">
      {/* Centered Card Container */}
      <Card className="w-full max-w-3xl text-center bg-white dark:bg-gray-800 shadow-md dark:shadow-black/40">
        <CardContent className="mt-16">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-destructive/90 p-6">
              <ServerCrash
                className="h-12 w-12 text-destructive-foreground dark:text-destructive-foreground"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Error Heading */}
          <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            500 - Internal Server Error
          </h1>

          {/* Error Description */}
          <p className="flex flex-col gap-4 sm:flex-row sm:justify-center text-gray-700 dark:text-gray-300">
            Sorry! Something went wrong on our server. We&apos;re working to fix it as quickly as possible.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Go to Home Page */}
            <Button asChild>
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" /> Go to HomePage
              </Link>
            </Button>

            {/* Refresh Current Page */}
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="flex items-center"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Refresh Page
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
