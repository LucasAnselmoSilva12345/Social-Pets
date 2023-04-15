import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Login } from '../components/Login';
import { Home } from '../pages/Home';

import { UserStorage } from '../contexts/UserContext';
import { UserAccount } from '../components/User/UserAccount';
import { ProtectedRoute } from '../utils/ProtectedRoute';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/account/*"
              element={
                <ProtectedRoute>
                  <UserAccount />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
