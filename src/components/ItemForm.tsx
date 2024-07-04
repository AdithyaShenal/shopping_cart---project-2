import { useForm } from "react-hook-form";
import { z } from "zod";
import { categoriesArray } from "../App";
import { useState } from "react";
import { items } from "../App";

interface Props {
  onSubmit: (data: ItemListData) => void;
}

const schema = z.object({
  category: z.string().min(3),
  name: z.string(),
  price: z.number(),
});

export type ItemListData = z.infer<typeof schema>;

const ItemList = ({ onSubmit }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { register, handleSubmit } = useForm<ItemListData>({});

  return (
    <>
      <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="select-category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            onChange={(event) => {
              setSelectedCategory(event.target.value);
            }}
            className="form-select mb-3"
            id="select-category"
          >
            <option selected disabled>
              Select Category
            </option>
            {categoriesArray.map((elememt) => (
              <option key={elememt} value={elememt}>
                {elememt}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="select-item" className="form-label">
            Items
          </label>
          <select
            {...register("name")}
            className="form-select"
            id="select-item"
          >
            <option selected disabled>
              Select Item
            </option>
            {selectedCategory &&
              items[selectedCategory].map((item) => (
                <option key={item}>{item}</option>
              ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            {...register("price")}
            type="number"
            className="form-control"
            id="price"
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Add
        </button>
      </form>
    </>
  );
};

export default ItemList;
