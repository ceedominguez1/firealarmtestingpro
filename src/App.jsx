import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import AnnualTesting from './pages/AnnualTesting';
import Maintenance from './pages/Maintenance';
import Lighting from './pages/Lighting';
import Compliance from './pages/Compliance';
import AreasServed from './pages/AreasServed';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/annual-testing" element={<AnnualTesting />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/lighting" element={<Lighting />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/about" element={<AreasServed />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
