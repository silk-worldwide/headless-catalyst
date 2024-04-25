const { generateCustomerImpersonationToken } = require('../../lib/bigcommerce');

export default async function handler(req, res) {
  const { customerId } = req.query;

  try {
    const token = await generateCustomerImpersonationToken(customerId);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
