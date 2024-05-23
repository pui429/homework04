const OrderItem = ({ item, choiceMenu }) => {
  const { id, drink, price, imgurl, eng, desc } = item;
  return (
    <li onClick={() => choiceMenu(id)}>
      <img src={imgurl} alt={drink} />
      <div className="info">
        <strong>{drink}</strong>
        <em>{eng}</em>
        <em>{desc}</em>
      </div>
    </li>
  );
};

export default OrderItem;
