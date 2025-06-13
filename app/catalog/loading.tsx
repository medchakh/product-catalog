"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Create an array of 12 items to display skeletons
  const skeletonArray = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skeletonArray.map((index) => (
          <CatalogItemSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

const CatalogItemSkeleton = () => {
  return (
    <Card className="flex flex-col h-full border-border/50">
      <CardHeader className="p-0">
        <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-t-lg relative">
          <Skeleton className="w-full h-full" />
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0.5 space-y-2 flex-grow">
        <div className="space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-1/3" />
        </div>

        <div className="pt-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mt-1" />
        </div>

        <div className="pt-2">
          <Skeleton className="h-6 w-1/4" />
        </div>
      </CardContent>

      <CardFooter className="p-4">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};
