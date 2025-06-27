import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import RequestPickupPage from './components/RequestPickupPage';
import ServicesPage from './components/ServicesPage';
import HowItWorksPage from './components/HowItWorksPage';
import ContactPage from './components/ContactPage';
import AdminPanel from './components/admin/AdminPanel';

function App() {
  return (
    <AdminProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/request-pickup" element={<RequestPickupPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;