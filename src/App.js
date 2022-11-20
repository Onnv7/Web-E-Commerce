import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CartList from './Pages/CartList/CartList';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import SellPage from './Pages/SellPage/SellPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dt" element={<SellPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<CartList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
