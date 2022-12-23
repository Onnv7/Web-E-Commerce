import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
    const ProtectedRoute = ({ children }) => {
        const { user } = useContext(AuthContext);

        if (!user) {
            return <Navigate to="/login" />;
        }

        return children;
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
