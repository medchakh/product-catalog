import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "product-favorites";
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedFavorites) {
      try {
        const favoriteIds = JSON.parse(savedFavorites);
        setFavorites(new Set(favoriteIds));
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(Array.from(favorites))
    );
  }, [favorites]);

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const isFavorite = (productId: number) => favorites.has(productId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};
