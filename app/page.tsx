import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4">Welcome to E-Shop!</h1>
      <p className="lead">Your one-stop online store for amazing products.</p>
      <Link href="/products" className="btn btn-primary btn-lg mt-3">
        Shop Now
      </Link>
    </div>
  );
}
