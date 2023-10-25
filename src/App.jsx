import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categoryInfo = { title: "Category List" };
  const productInfo = { title: "Product List" };

  const changeCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <div>
        <div className="text-center">
          <Navbar />
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-3 text-center">
            <CategoryList
              selectedCategory={selectedCategory}
              changeCategory={changeCategory}
              info={categoryInfo}
            />
          </div>
          <div className="col-9 text-center">
            <ProductList
              selectedCategory={selectedCategory}
              info={productInfo}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
