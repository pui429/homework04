const Shopping = ({ choice, cntPlus, setOn, setAmount, onCart, amount }) => {
  const { id, drink, price } = choice;
  return (
    <div className={!id ? "right" : "right on"}>
      <div className="text">
        <div>
          <strong>고르신 메뉴</strong> <span>{drink}</span>
        </div>
        <div>
          <strong>가격</strong>{" "}
          <span>
            {Number(price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </span>
        </div>
        <div>
          <strong>수량</strong>
          <select onChange={(e) => setAmount(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <button className="cart" onClick={() => cntPlus(amount) & onCart(choice)}>
        장바구니
      </button>
    </div>
  );
};

export default Shopping;
