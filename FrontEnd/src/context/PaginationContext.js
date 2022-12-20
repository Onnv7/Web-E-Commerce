import { useReducer } from 'react'
import { createContext } from "react";
const INITIAL_STATE = {
    products: [], // toàn bộ sản phẩm
    totalPages: 1, // số sp trên 1 trang
    //currentPage: 1, // trang hiện tại
    //totalPages: 1, // tổng số trang
};
const calculate = (data) => {

    let currentPage = data.currentPage;
    let totalPages = Math.ceil(data.items.length / data.pageCount);
    if (currentPage > totalPages)
        currentPage = totalPages;
    // let hasPreviousPage = currentPage == 1 ? false : true;
    // let hasNextPage = currentPage == totalPages ? false : true;

    let first = (currentPage - 1) * data.pageCount
    let last = first + data.pageCount;
    let filteredItems = data.items.slice(first, last)

    let newState = {
        products: filteredItems,
        totalPages: totalPages,
        //currentPage: currentPage,
    }
    return newState;
}
export const PaginationContext = createContext(INITIAL_STATE);

const PaginationReducer = (state, action) => {
    switch (action.type) {
        case "START":
            const rs = calculate(action.payload);
            return rs;

        default:
            return state;
    }
}

export const PaginationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PaginationReducer, INITIAL_STATE);

    return (
        <PaginationContext.Provider
            value={{
                products: state.products,
                totalPages: state.totalPages,
                //currentPage: state.currentPage,
                dispatch
            }}
        >
            {children}
        </PaginationContext.Provider>
    )
}