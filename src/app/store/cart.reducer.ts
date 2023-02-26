import { createReducer, on } from '@ngrx/store';
import { addProducts } from './cart.action';
import { cartState } from './cart.state';
import { removeProducts } from './cart.action';

export const initialState: cartState = {
  product: [],
  count: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(addProducts, (state, { product }) => {
    const cartstore = [...state.product];
    const tempCart = cartstore.filter((p) => p.id !== product.id);
    const index = cartstore.findIndex((p) => p.id === product.id);
   if (index === -1) {
      cartstore.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      });
    } else {
      return {
        ...state, // <--- Spread operator
        products: [
          ...tempCart,
          {
            id: product.id,
            title: product.title,
            price: product.price,
           quantity: cartstore[index].quantity + 1,
          },
        ],
      };
    }
    return { ...state, products: cartstore, count: state.count + 1 };
  }),
  on(removeProducts, (state, { product }) => {
    console.log('product' + JSON.stringify(product));
    const cart = [...state.product];
    console.log('cart' + JSON.stringify(cart));
    const tempCart = cart.filter((p) => p.id !== product.id);
    console.log('tempcart' + JSON.stringify(tempCart));
    const index = cart.findIndex((p) => p.id === product.id);

    if (index === -1) {
      return { ...state, products: cart, count: state.count - 1 };
    } else {
      return { ...state, products: tempCart, count: state.count - 1 };
    }
  })
);
