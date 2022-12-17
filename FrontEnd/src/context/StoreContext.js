import { createContext, useReducer } from "react";

export const StoreContext = createContext();

const initialState = {
    cart: {
        indexItem: localStorage.getItem("indexItem")
            ? JSON.parse(localStorage.getItem("indexItem"))
            : 0,
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shopItems: localStorage.getItem("shopItems")
            ? JSON.parse(localStorage.getItem("shopItems"))
            : [],
    },
    wishlist: {
        wishlistItems: localStorage.getItem("wishlistItems")
            ? JSON.parse(localStorage.getItem("wishlistItems"))
            : [],
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case "WISHLIST_CHANGE_ITEM": {
            const newItem = action.payload;
            let existItem = state.wishlist.wishlistItems.find(
                (item) => item._id === newItem._id
            );
            const wishlistItems = existItem
                ? state.wishlist.wishlistItems.filter(
                      (item) => item._id !== newItem._id
                  )
                : [...state.wishlist.wishlistItems, newItem];
            localStorage.setItem(
                "wishlistItems",
                JSON.stringify(wishlistItems)
            );
            return { ...state, wishlist: { ...state.wishlist, wishlistItems } };
        }
        case "CART_ADD_ITEM": {
            const newItem = action.payload;
            let existItem = state.cart.cartItems.find(
                (item) =>
                    item._id === newItem._id &&
                    item.sizeProduct === newItem.sizeProduct
            );
            const cartItems = existItem
                ? state.cart.cartItems.map((item) =>
                      item._id === newItem._id &&
                      item.sizeProduct === newItem.sizeProduct
                          ? newItem
                          : item
                  )
                : [...state.cart.cartItems, newItem];
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return { ...state, cart: { ...state.cart, cartItems } };
        }
        case "SHOP_ADD_ITEM": {
            const newItem = action.payload;
            let existItem = state.cart.shopItems.find(
                (item) => item._id === newItem._id
            );
            const shopItems = existItem
                ? state.cart.shopItems.map((item) =>
                      item._id === newItem._id ? newItem : item
                  )
                : [...state.cart.shopItems, newItem];
            localStorage.setItem("shopItems", JSON.stringify(shopItems));
            return { ...state, cart: { ...state.cart, shopItems } };
        }
        case "CART_REMOVE_ITEM": {
            const removeItem = action.payload;
            const cartItems = state.cart.cartItems.filter(
                (item) =>
                    item._id !== removeItem._id ||
                    (item._id === removeItem._id &&
                        item.sizeProduct !== removeItem.sizeProduct)
            );
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return { ...state, cart: { ...state.cart, cartItems: cartItems } };
        }

        default:
            return state;
    }
};
export function StoreProvider(props) {
    const [state, contextDispatch] = useReducer(reducer, initialState);
    const value = { state, contextDispatch };
    return (
        <StoreContext.Provider value={value}>
            {props.children}{" "}
        </StoreContext.Provider>
    );
}
