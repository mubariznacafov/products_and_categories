import React from "react";
import { ListGroup } from "react-bootstrap";

const CategoryList = (props) => {
  const { info, selectedCategory, changeCategory } = props; // Props'u al

  const categories = [
    { categoryId: 1, categoryName: "Foods" },
    { categoryId: 2, categoryName: "Drinks" },
  ];

  return (
    <div>
      <h1>{info.title}</h1>
      <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item
            key={category.categoryId}
            onClick={() => {
              changeCategory(category.categoryName);
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
