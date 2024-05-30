import React, { useState, useEffect } from 'react';
import './css/ProductList.css'; // Assuming this is for styling

function ProductList() {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [topN, setTopN] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://20.244.56.144/test/companies');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredData = products.filter((product) => {
      return (
        product.company === company &&
        product.price >= minPrice &&
        product.price <= maxPrice
      );
    });

    // Sort filtered products by price (ascending or descending based on preference)
    const sortedProducts = [...filteredData].sort((a, b) => a.price - b.price);

    // Take the top N products based on the user's selection
    const topNProducts = sortedProducts.slice(0, topN);

    setFilteredProducts(topNProducts);
  };

  return (
    <div>
      <h1>Fetch Products</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Company:
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </label>
        
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </label>
        
        <label>
          Top N:
          <input type="number" value={topN} onChange={(e) => setTopN(e.target.value)} required />
        </label>
      
        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} required />
        </label>
      
        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} required />
        </label>
      
        <button type="submit">Fetch Products</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <table className="product-table">
        <thead>
          <tr>
            <th className="product-name">Product Name</th>
            <th className="product-price">Price</th>
            <th className="product-discount">Discount </th>
            <th className="product-availablity"> Availability</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td className="product-name">{product.productname}</td>
              {product.discount? (
                <td className="product-price discount-price">
                  ${product.price} (
                  <span className="discount-percentage">-{product.discount}%</span>
                  )
                </td>
              ) : (
                <td className="product-price">${product.price}</td>
              )}
              <td className="product-discount">{product.discount? 'Available' : 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;