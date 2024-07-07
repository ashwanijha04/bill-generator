import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import BillPage from './components/BillPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container className="app-container">
        <Typography variant="h4" gutterBottom>
          Bill Generator
        </Typography>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<AddItem />} />
          <Route path="/view" element={<ItemList />} />
          <Route path="/bill/:id" element={<BillPage />} />
          <Route path="/reports" element={<div>Reports View</div>} />
          <Route path="/settings" element={<div>Settings View</div>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
