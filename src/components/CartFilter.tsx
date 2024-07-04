import { categoriesArray } from "../App";

interface Props {
  onFilter: (category: string) => void;
}

const CartFilter = ({ onFilter }: Props) => {
  return (
    <>
      <div className="mb-5">
        <div className="mb-3">
          <label htmlFor="item_filter" className="form-label">
            Filter by Category
          </label>
          <select
            onChange={(event) => onFilter(event.target.value)}
            className="form-select"
            id="item_filter"
          >
            <option value="">All Category</option>
            {categoriesArray.map((elememt) => (
              <option key={elememt} value={elememt}>
                {elememt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default CartFilter;
