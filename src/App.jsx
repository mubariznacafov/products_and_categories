import { React, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";

function App() {
  let categoryInfo = { title: "Category List" };
  let productInfo = { title: "Product List" };

  const [selectedCategory, setSelectedCategory] = useState("");

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
              info={categoryInfo}
              selectedCategory={selectedCategory}
              changeCategory={changeCategory}
            />
          </div>
          <div className="col-9 text-center">
            <ProductList
              info={productInfo}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
