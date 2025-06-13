"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X, ArrowUpDown } from "lucide-react";

interface SearchAndFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
  sortBy: string;
  sortDirection: "asc" | "desc";
  onSort: (option: string) => void;
  totalItems: number;
}

const SearchAndFilters = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  sortBy,
  sortDirection,
  onSort,
  totalItems,
}: SearchAndFiltersProps) => {
  const clearSearch = () => {
    onSearchChange("");
  };

  const clearCategory = () => {
    onCategoryChange("all");
  };

  const clearSort = () => {
    onSort("name");
  };

  return (
    <div className="space-y-4 p-4 bg-card rounded-lg border shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search Bar */}

          <div className="relative w-full sm:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Category:
            </span>
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-[180px] cursor-pointer">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="cursor-pointer"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedCategory !== "all" && (
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer"
                onClick={clearCategory}
              >
                <X className="h-4 w-4" /> Clear
              </Button>
            )}
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Sort by:
            </span>
            <div className="flex gap-2 flex-wrap">
              {(["name", "price"] as const).map((option) => (
                <Button
                  key={option}
                  variant={sortBy === option ? "default" : "outline"}
                  size="sm"
                  onClick={() => onSort(option)}
                  className="capitalize transition-all duration-200 cursor-pointer"
                >
                  {option}
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Status Badges */}
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {totalItems} items
          </Badge>
        </div>
      </div>

      {/* Active Filters */}
      {(searchTerm ||
        selectedCategory !== "all" ||
        sortBy !== "name" ||
        sortDirection !== "asc") && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {searchTerm && (
            <Badge variant="secondary" className="text-xs">
              Search: &quot;{searchTerm}&quot;
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="ml-1 h-4 w-4 p-0 cursor-pointer"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {selectedCategory !== "all" && (
            <Badge variant="secondary" className="text-xs">
              Category: {selectedCategory}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCategory}
                className="ml-1 h-4 w-4 p-0 cursor-pointer"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {(sortBy !== "name" || sortDirection !== "asc") && (
            <Badge variant="secondary" className="text-xs capitalize">
              Sort: {sortBy} {sortDirection}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSort}
                className="ml-1 h-4 w-4 p-0 cursor-pointer"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilters;
