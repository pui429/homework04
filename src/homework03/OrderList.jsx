import { useEffect } from "react";
import OrderItem from "./OrderItem";
import { FaShoppingCart } from "react-icons/fa";

const OrderList = ({
  menu,
  choiceMenu,
  cnt,
  setOn,
  setMsg,
  isMsg,
  setIsMsg,
}) => {
  return (
    <div className="left">
      <div className="top">
        <h2>MENU</h2>
        <b
          onClick={
            cnt === 0
              ? () => setMsg("장바구니가 비어있습니다.") & setIsMsg(true)
              : () => setOn(true)
          }
        >
          <FaShoppingCart />
        </b>
        <span onClick={() => isMsg(false)}>{cnt}</span>
      </div>
      <ul className="menulist">
        {menu.map((item) => (
          <OrderItem key={item.id} item={item} choiceMenu={choiceMenu} />
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
