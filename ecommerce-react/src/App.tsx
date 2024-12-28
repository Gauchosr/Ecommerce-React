import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import CartPage from './pages/Carrello';
import RegistrazionePage from './pages/registrazionePage';
import LoginPage from './pages/loginPage';
import { Checkout } from './pages/Checkout';

function App() {
  return (
        <Layout>
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/carrello" element={<CartPage />} />
            <Route path="/registrazione" element={<RegistrazionePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>

  );
}

export default App;