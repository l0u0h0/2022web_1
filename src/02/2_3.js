function getTotal(cart) {
  return cart.amount * cart.price;
}
const cart = {
  name: '도서',
  amount: 5,
  price: 300
};
var product = {};
var myCart = `장바구니에 ${cart.name} 가 있습니다. 총 금액은 ${getTotal(cart)} 입니다.`;
console.log(myCart);