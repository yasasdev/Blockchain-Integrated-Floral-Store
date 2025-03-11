import { flowersales_final_backend } from 'declarations/flowersales_final_backend';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdminPortal from '../pages/AdminPortal';

function App() {
    return(
        <Router>
            <Routes>

                {/* HomePage Route */}
                <Route path="/" element={<HomePage />} />

                {/* Admin Route */}
                <Route path="/admin" element={<AdminPortal />} />

                {/* Redirect unknown routes */}
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </Router>
    );
}

export default App;
