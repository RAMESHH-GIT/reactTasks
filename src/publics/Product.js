//  import React, { useEffect, useState } from 'react';

// const productDetails =[
//     {
//       id: 1,
//       name: "Product 1",
//       price: 10.99
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 19.99
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 5.99
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       price: 14.99
//     }
//   ]


// const ProductList = () => {
//   const [products, setProducts] = useState(productDetails);

//   const [sortOrder, setSortOrder] = useState('asc');

//   const handleSort = (event) => {
//     const selectedSortOrder = event.target.value;
//     const sortedProducts = [...products];
//     sortedProducts.sort((a, b) => {
//       if (selectedSortOrder === 'asc') {
//         return a.price - b.price;
//       } else {
//         return b.price - a.price;
//       }
//     });
//     setProducts(sortedProducts);
//     setSortOrder(selectedSortOrder);
//   };

//   return (
//     <div>
//       <label htmlFor="sortOrder">Sort by Price:</label>
//       <select id="sortOrder" value={sortOrder} onChange={handleSort}>
//         <option value="asc">Low to High</option>
//         <option value="desc">High to Low</option>
//       </select>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
import React, { useEffect, useState } from 'react';

const productDetails = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99
  },
  {
    id: 3,
    name: "Product 3",
    price: 5.99
  },
  {
    id: 4,
    name: "Product 4",
    price: 14.99
  }
]

const ProductList = () => {
  const [products, setProducts] = useState(productDetails);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (event) => {
    const selectedSortOrder = event.target.value;
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (selectedSortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
    setSortOrder(selectedSortOrder);
  };

  useEffect(() => {
    // Sort products initially on component mount
    // const sortedProducts = [...products];
    // sortedProducts.sort((a, b) => a.price - b.price);
    // setProducts(sortedProducts);
  }, []);

  return (
    <div>
      <label htmlFor="sortOrder">Sort by Price:</label>
      <select id="sortOrder" value={sortOrder} onChange={handleSort}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
