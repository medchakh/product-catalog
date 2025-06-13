"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Optional: Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-card border rounded-lg shadow-sm p-6 text-center">
        <div className="mb-6 flex justify-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-3">
          Something went wrong
        </h2>
        <p className="text-muted-foreground mb-6">
          {error.message ||
            "We couldn't load the product catalog. Please try again."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => reset()}
            variant="outline"
            className="mb-2 sm:mb-0"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="default"
          >
            Go to home page
          </Button>
        </div>
        {/* Display error details in development mode */}
        {process.env.NODE_ENV === "development" && error.digest && (
          <div className="mt-6 p-4 bg-muted rounded-md text-xs text-left overflow-auto">
            <p className="font-mono mb-2 text-muted-foreground">
              Error Digest: {error.digest}
            </p>
            <pre className="text-muted-foreground whitespace-pre-wrap break-all">
              {error.stack}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
