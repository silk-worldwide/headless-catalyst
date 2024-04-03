import Link from 'next/link';
import { getAllProductSlugs } from '../../lib/bigcommerce';

export async function getStaticProps() {
  const products = await getAllProductSlugs();
  return {
    props: {
      products,
    },
  };
}

export default function ProductsList({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.params.slug}>
            <Link href={`/products/${product.params.slug}`}>
              <a>{product.params.slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
