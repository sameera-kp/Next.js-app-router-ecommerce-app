import axios from 'axios';
import { Product } from '../types/product';
import ProductCard from '../components/ProductCard';

export default async function ProductsPage() {
  const { data: products } = await axios.get<Product[]>('https://fakestoreapi.com/products');

  return (
    <div>
      <h1 className="mb-4">Products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
