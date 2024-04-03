import { getProductBySlug, getAllProductSlugs } from '../../lib/bigcommerce';

export async function getStaticPaths() {
  const products = await getAllProductSlugs();
  
  const paths = products.map((product) => ({
    params: { slug: product.params.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    console.log('Fetching product for slug:', params.slug);
    const product = await getProductBySlug(params.slug);
    console.log('Fetched product:', product);
    return { props: { product } };
  }
  

export default function Product({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* other product details here */}
    </div>
  );
}
