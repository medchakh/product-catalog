import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Product Showcase</h1>

        {/* Catalog Container */}
        <div className="w-full max-w-md p-6 bg-white dark:bg-black/30 rounded-lg shadow-md border border-black/[.08] dark:border-white/[.145]">
          <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
            Product Catalog
          </h2>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left">
            Browse our latest collection of products and services.
          </p>
          <Link
            href="/catalog"
            className="w-full rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-5"
          >
            Check Catalog
          </Link>
        </div>
      </main>
    </div>
  );
}
