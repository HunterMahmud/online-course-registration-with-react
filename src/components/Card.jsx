
function Card({ carts }) {
  
  return (
    <div className="bg-white rounded-2xl p-5 ">
      <h1 className="font-bold text-2xl">Credit Hour Remaining {carts.reduce((totalCredit, cart) => totalCredit - cart.credit, 15)} hr</h1>
      <div className="divider"></div>
      <h3 className="font-semibold text-xl mb-5">Course Name</h3>
      <ol className="list-decimal list-inside">
        {carts.map((cart, i) => (
          <li key={i}>{cart.name}</li>
        ))}
      </ol>
      
      <div className="divider"></div>
      <div>
        Total Credit Hour: {carts.reduce((totalCredit, cart) => totalCredit + cart.credit, 0)} hr
      </div>
      <div className="divider"></div>
      <div>Total Price: {carts.reduce((totalPrice, cart) => totalPrice + cart.price, 0)} USD</div>
    </div>
  );
}

export default Card;
