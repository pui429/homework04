import { useEffect } from "react";
import CheckItem from "./CheckItem";

const CheckList = ({
  on,
  cart,
  onDel,
  cntMinus,
  cnt,
  setOn,
  onEdit,
  setInputOn,
  inputOn,
  current,
  onUpdate,
  sum,
  setMsg,
  setIsMsg,
}) => {
  useEffect(() => {
    cnt === 0 && setOn(false);
  }, [cnt]);
  return (
    <div className={on && cnt !== 0 ? "checklist on" : "checklist"}>
      <table>
        <colgroup>
          <col className="menu" />
          <col className="amount" />
          <col className="price" />
          <col className="button" />
        </colgroup>
        <thead>
          <tr>
            <th>메뉴</th>
            <th>수량</th>
            <th>금액</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cnt === 0
            ? null
            : cart.map((item) => (
                <CheckItem
                  key={item.id}
                  item={item}
                  onDel={onDel}
                  cntMinus={cntMinus}
                  onEdit={onEdit}
                  setInputOn={setInputOn}
                  inputOn={inputOn}
                  current={current}
                  onUpdate={onUpdate}
                />
              ))}
        </tbody>
      </table>
      <p className="allprice">
        총금액 : {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
      </p>
      <p className="btn">
        <button
          className="orderbtn"
          onClick={() => setMsg("주문이 완료 되었습니다.") & setIsMsg(true)}
        >
          주문하기
        </button>
      </p>
    </div>
  );
};

export default CheckList;
