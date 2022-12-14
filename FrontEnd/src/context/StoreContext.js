import { createContext, useReducer } from "react";

export const StoreContenxt = createContext();

const initialState = {
    cart: {
        indexItem: localStorage.getItem("indexItem")
            ? JSON.parse(localStorage.getItem("indexItem"))
            : 0,
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
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
        default:
            return state;
    }
};
export function StoreProvider(props) {
    const [state, contextDispatch] = useReducer(reducer, initialState);
    const value = { state, contextDispatch };
    return (
        <StoreContenxt.Provider value={value}>
            {props.children}{" "}
        </StoreContenxt.Provider>
    );
}
