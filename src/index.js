import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route component={BooksList} path="/" exact={true} />
            <Route component={AddBook} path="/add" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;