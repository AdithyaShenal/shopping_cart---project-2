import { CartItemsProps } from "../App";

interface Props {
  selectedCartItems: CartItemsProps[];
  onDelete: (id: number) => void;
}

const CartList = ({ selectedCartItems, onDelete }: Props) => {
  if (selectedCartItems.length === 0) {
    return null;
  }

  return (
    <>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {selectedCartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{Number(item.price).toFixed(2)}</td>
              <td className="text-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <td>Total</td>
          <td></td>
          <td></td>
          <td>
            {selectedCartItems
              .reduce((acc, e) => Number(e.price) + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
        </tfoot>
      </table>
    </>
  );
};

export default CartList;
