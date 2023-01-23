import React from 'react';

import Container from 'layout/Container';
import HomePage from 'pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Header from 'layout/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
