import axios from 'axios';
import { Product } from '../../types/product';

interface Props {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: Props) {
  const { data: product } = await axios.get<Product>(`https://fakestoreapi.com/products/${params.id}`);

  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: '400px', objectFit: 'contain' }} />
      </div>
      <div className="col-md-6">
        <h2>{product.title}</h2>
        <h4 className="text-success">${product.price}</h4>
        <p>{product.description}</p>
        <button className="btn btn-success">Add to Cart</button>
      </div>
    </div>
  );
}
