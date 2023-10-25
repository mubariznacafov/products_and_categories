import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ProductList = (props) => {
  const { selectedCategory } = props;
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => {
          if (selectedCategory) {
            const filtered = data.filter(
              (product) => product.categoryId === selectedCategory
            );
            setFilteredProducts(filtered);
          } else {
            setFilteredProducts(data);
          }
        })
        .catch((err) => console.error(err));
    };
    getProducts();
  }, [selectedCategory]);

  return (
    <div>
      <h1>
        {props.info.title}-{selectedCategory}
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
