import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

const CategoryList = (props) => {
  const { info, selectedCategory, changeCategory } = props;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch("http://localhost:3000/categories")
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((err) => console.error(err));
    };
    getCategories();
  }, []);

  return (
    <div>
      <h1>{info.title}</h1>
      <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item
            key={category.id}
            onClick={() => {
              changeCategory(category.id);
            }}
          >
            {category.categoryName}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4>{selectedCategory}</h4>
    </div>
  );
};

export default CategoryList;
