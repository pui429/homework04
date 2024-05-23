import { useEffect, useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const CheckItem = ({
  item,
  onDel,
  cntMinus,
  onEdit,
  setInputOn,
  inputOn,
  current,
  onUpdate,
}) => {
  const { id, drink, price, imgurl, number } = item;
  const [list, setList] = useState(current);
  useEffect(() => {
    setList(current);
  }, [current]);
  const changeInput = (e) => {
    const { name, value } = e.target;
    setList({ ...list, [name]: Number(value) });
    list.total = Number(list.price * list.number);
    onUpdate(list);
  };
  return (
    <tr>
      <td>
        <img src={imgurl} alt={drink} />
        <p>{drink}</p>
      </td>
      <td>
        {inputOn ? (
          <input
            type="number"
            name="number"
            value={number}
            onChange={changeInput}
          />
        ) : (
          number
        )}
      </td>
      <td>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
      <td>
        <span
          onClick={() =>
            (inputOn ? setInputOn(false) : setInputOn(true)) & onEdit(item)
          }
        >
          <FaPen />
        </span>
        <span onClick={() => onDel(id) & cntMinus()}>
          <FaTrashAlt />
        </span>
      </td>
    </tr>
  );
};

export default CheckItem;
