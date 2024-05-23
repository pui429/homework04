import { useEffect, useState } from "react";
import "../assets/css/MegaOrder.scss";
import OrderList from "./OrderList";
import megaList from "../assets/api/megaList";
import Shopping from "./Shopping";
import CheckList from "./CheckList";
import PopUp from "./PopUp";

const Order = () => {
  const [menu, setMenu] = useState(megaList);
  const [choice, setChoice] = useState({});
  const [cart, setCart] = useState([]);
  const [msg, setMsg] = useState("");
  const [isMsg, setIsMsg] = useState(false);
  const [cnt, setCnt] = useState(0);
  const [on, setOn] = useState(false);
  const [amount, setAmount] = useState(1);
  const [inputOn, setInputOn] = useState(false);
  const [current, setCurrent] = useState({});
  const [sum, setSum] = useState(0);

  //메뉴선택
  const choiceMenu = (id) => {
    setChoice(menu.find((item) => item.id === id));
  };
  //수량증가
  const cntPlus = () => {
    setCnt(cnt + 1);
  };
  //수량감소
  const cntMinus = () => {
    setCnt(cnt - 1);
  };
  //장바구니 담기
  const onCart = (choice) => {
    choice.number = Number(amount);
    choice.total = Number(choice.price * choice.number);
    setCart([...cart, choice]);
  };
  //삭제
  const onDel = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  //수정
  const onEdit = (item) => {
    setCurrent(item);
  };
  //값 수정
  const onUpdate = (list) => {
    setCart(cart.map((item) => (list.id === item.id ? list : item)));
  };

  //총합
  useEffect(() => {
    setSum(
      cart.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0)
    );
  }, [cart]);

  return (
    <div className="wrap">
      <PopUp
        msg={msg}
        setMsg={setMsg}
        on={on}
        setOn={setOn}
        isMsg={isMsg}
        setIsMsg={setIsMsg}
      />
      <h1>
        <img src="./images/logo.png" alt="Mega Coffee" />
      </h1>
      <div className="orderbox">
        <OrderList
          menu={menu}
          choiceMenu={choiceMenu}
          cnt={cnt}
          setOn={setOn}
          setMsg={setMsg}
          msg={msg}
          isMsg={isMsg}
          setIsMsg={setIsMsg}
        />
        <Shopping
          choice={choice}
          cntPlus={cntPlus}
          setOn={setOn}
          setAmount={setAmount}
          onCart={onCart}
          amount={amount}
        />
      </div>
      <CheckList
        on={on}
        cart={cart}
        onDel={onDel}
        cntMinus={cntMinus}
        cnt={cnt}
        setOn={setOn}
        onEdit={onEdit}
        setInputOn={setInputOn}
        inputOn={inputOn}
        current={current}
        onUpdate={onUpdate}
        sum={sum}
        setMsg={setMsg}
        setIsMsg={setIsMsg}
      />
    </div>
  );
};

export default Order;
