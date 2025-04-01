import { flowersales_final_backend } from 'declarations/flowersales_final_backend';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Product from '../pages/ProductPage/Product';
import LoginPage from '../pages/LoginPage/LoginPage';

function App() {
    return(
        <Router>
            <Routes>

                {/* HomePage Route */}
                <Route path="/" element={<HomePage />} />

                {/* Admin Route */}
                <Route path="/admin" element={<LoginPage />} />

                {/* Products Route */}
                <Route path="/products" element={<Product />} />

                {/* Redirect unknown routes */}
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </Router>
    );
}

export default App;
