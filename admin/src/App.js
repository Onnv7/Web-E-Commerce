import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
