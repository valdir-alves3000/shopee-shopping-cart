import * as cartService from "./services/cart.js";
import { createItem } from "./services/item.js";

const cart = [];
const whishList = [];

console.log("Welcome to the your Shopee cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
await cartService.removeItem(cart, item1);

await cartService.displayCart(cart);
await cartService.calculateTotal(cart);
