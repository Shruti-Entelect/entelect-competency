import { useEffect, useState } from 'react';
import { productRepository } from '../../model/repository/AppRepository';
import { Product } from '../../model/types/Products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    const data = await productRepository.getProducts();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, loading };
};