async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  console.log("Shopee Cart Total IS: ");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

  console.log(`🎁 Total: ${result}`);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name == name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name == item.name);

  if (indexFound == -1) return console.log("Item não encontrado");

  if (userCart[indexFound].quantity > 1) return userCart[indexFound].quantity--;

  if (userCart[indexFound].quantity === 1)
    return await deleteItem(userCart, item.name);
}

async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | SubTotal: R$ ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, displayCart, removeItem };
