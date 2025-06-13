// Tests for useFavorites hook
import { renderHook, act } from '@testing-library/react';
import { useFavorites } from '../hooks/useFavorites';

describe('useFavorites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add a product to favorites', () => {
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.toggleFavorite(1);
    });
    expect(result.current.isFavorite(1)).toBe(true);
  });

  it('should remove a product from favorites', () => {
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.toggleFavorite(2);
    });
    act(() => {
      result.current.toggleFavorite(2);
    });
    expect(result.current.isFavorite(2)).toBe(false);
  });

  it('should persist favorites in localStorage', () => {
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.toggleFavorite(3);
    });
    // Simulate reload
    const { result: result2 } = renderHook(() => useFavorites());
    expect(result2.current.isFavorite(3)).toBe(true);
  });
});
