import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./Components/GlobalStyles";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/AuthContext.js";
import { StoreProvider } from "./context/StoreContext";
import { PaginationContextProvider } from "./context/PaginationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <GlobalStyles>
        <AuthContextProvider>
            <PaginationContextProvider>
                <StoreProvider>
                    <App />
                </StoreProvider>
            </PaginationContextProvider>
        </AuthContextProvider>
    </GlobalStyles>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
