import { useState } from "react";
import ExpenseList from "./components/CartList";
import ItemList from "./components/ItemForm";
import { ItemListData } from "./components/ItemForm";
import CartFilter from "./components/CartFilter";
import NavBar from "./components/NavBar";

interface Items {
  [key: string]: string[];
}

export const items: Items = {
  Vegetables: ["Onion", "Potato", "Cabbage"],
  Grocery: ["Sugar", "Milk powder", "Rice"],
  Fruits: ["Orange", "Apple", "Grapes"],
};

export const categoriesArray = ["Vegetables", "Fruits", "Grocery"];

export interface CartItemsProps {
  id: number;
  name: string;
  category: string;
  price: number;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItems, setSelectedItems] = useState<CartItemsProps[]>([]);

  const handleSubmit = (data: ItemListData) => {
    setSelectedItems([
      ...selectedItems,
      { ...data, id: selectedItems.length + 1 },
    ]);
  };

  const deleteHandler = (id: number) => {
    setSelectedItems(selectedItems.filter((item) => item.id != id));
  };

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  const visibleItems = selectedCategory
    ? selectedItems.filter((elememt) => elememt.category === selectedCategory)
    : selectedItems;

  return (
    <>
      <NavBar />
      <div className="container-sm">
        <ItemList onSubmit={handleSubmit} />
        <CartFilter onFilter={handleFilter} />
        <ExpenseList
          selectedCartItems={visibleItems}
          onDelete={deleteHandler}
        />
      </div>
    </>
  );
}

export default App;
