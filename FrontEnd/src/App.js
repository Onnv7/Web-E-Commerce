import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Ruby from './Pages/Ruby/Ruby.js';
import Image from './Pages/Image/image.js';
import Show from './Pages/Image/Show.js';
import Money from './Pages/Ruby/Money.js';
import Paypal from './Pages/Ruby/Paypal.js';
import SellPage from './Pages/SellPage/SellPage';
import CartList from './Pages/CartList/CartList';
import Profile from './Pages/Profile/Profile';
import Payment from './Pages/Payment/Payment';
import SellerPage from './Pages/SellerPage/SellerPage';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import NewProduct from './Pages/NewProduct/NewProduct';
import DetailProduct from './Pages/DetailProduct/DetailProduct';
import AuctionPage from './Pages/AuctionPage/AuctionPage';
import AuctionHistory from './Pages/AuctionHistory/AuctionHistory';
import ViewShop from './Pages/ViewShop/ViewShop';
import DetailCategory from './Pages/DetailCategory/DetailCategory';

function App() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="bottom-center"
                limit={1}
                autoClose={2000}
                pauseOnHover={false}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:slug" element={<SellPage />} />
                <Route path="/img" element={<Image />} />
                <Route path="/money" element={<Money />} />
                <Route path="/paypal" element={<Paypal />} />
                <Route path="/simg" element={<Show />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/thanhtoan" element={<Ruby />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<CartList />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/seller" element={<SellerPage />} />
                <Route path="/seller/update/:id" element={<UpdateProduct />} />
                <Route path="/seller/new/:id" element={<NewProduct />} />
                <Route path="/seller/detail/:id" element={<DetailProduct />} />
                <Route path="/auction" element={<AuctionPage />} />
                <Route path="/history" element={<AuctionHistory />} />
                <Route path="/viewshop" element={<ViewShop />} />
                <Route path="/detail/:id" element={<DetailCategory />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
