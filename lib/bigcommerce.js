const fetch = require('node-fetch');

const BIGCOMMERCE_STORE_API_URL = process.env.BIGCOMMERCE_STORE_API_URL;
const BIGCOMMERCE_STORE_API_TOKEN = process.env.BIGCOMMERCE_STOREFRONT_API_TOKEN;

export async function getAllProductSlugs() {
    const url = `${BIGCOMMERCE_STORE_API_URL}/catalog/products?limit=250&fields=custom_url`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': BIGCOMMERCE_STORE_API_TOKEN
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data.data.map(product => {
            return {
                params: {
                    slug: product.custom_url.url,
                },
            };
        });
    } catch (error) {
        console.error("Failed to fetch product slugs:", error);
        return [];
    }
}

const fetch = require('node-fetch');

async function generateCustomerImpersonationToken(customerId) {
  const url = `${process.env.BIGCOMMERCE_STORE_API_URL}customers/${customerId}/impersonation-token`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-Auth-Token': process.env.BIGCOMMERCE_STORE_API_TOKEN,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to generate impersonation token: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data.token;
}


export async function getProductBySlug(slug) {
    const url = `${BIGCOMMERCE_STORE_API_URL}/catalog/products?custom_url=${slug}&include=variants,images`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': BIGCOMMERCE_STORE_API_TOKEN
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.data.length > 0 ? data.data[0] : null;
    } catch (error) {
        console.error(`Failed to fetch product details for slug: ${slug}`, error);
        return null;
    }
}
