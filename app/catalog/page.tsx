import { Suspense } from "react";
import CatalogList from "./_components/catalogList";
import CatalogSkeleton from "./_components/catalogSkeleton";

const FAKESTORE_API_URL = "https://fakestoreapi.com/products";

async function getCatalogData() {
  const res = await fetch(FAKESTORE_API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // uncomment this to simulate an error
  //throw new Error("Failed to fetch data from the API");
  return res.json();
}

export default async function CatalogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1403px] mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Product Catalog
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover our products with advanced filtering and sorting
          </p>
        </div>
        <Suspense fallback={<CatalogSkeleton />}>
          <CatalogList data={getCatalogData()} />
        </Suspense>
      </div>
    </div>
  );
}
