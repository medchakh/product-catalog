"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/utils/types";
import { useState } from "react";
import Image from "next/image";

interface CatalogItemType {
  product: Product;
  index?: number;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
}

const CatalogItem = ({
  product,
  isFavorite,
  onToggleFavorite,
}: CatalogItemType) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const showImage = imageLoaded && !imageError && product.image;

  return (
    <Card className=" gap-2 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20 flex flex-col h-full">
      <CardHeader className="p-0">
        <div
          className={`aspect-square rounded-t-lg relative overflow-hidden ${
            showImage
              ? "bg-white"
              : "bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              showImage ? "hidden" : ""
            }`}
          />

          {!showImage && (
            <div className="flex items-center justify-center h-full text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors duration-300">
              {product.title.charAt(0)}
            </div>
          )}

          {product.image && (
            <Image
              src={product.image}
              width={500}
              height={500}
              alt={product.title}
              className={`object-contain w-full h-full absolute inset-0 transition-opacity duration-300 ${
                showImage ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggleFavorite(product.id)}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/80 z-10"
          >
            <Heart
              className={`h-4 w-4 transition-colors duration-200 ${
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-muted-foreground hover:text-red-500"
              }`}
            />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0.5 space-y-2 flex-grow">
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2 h-12">
            {product.title}
          </h3>
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-[-1rem]">
        <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatalogItem;
