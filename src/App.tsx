import React from 'react';
//import inscriptionPage from './pages/inscriptionPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InscriptionPage from './pages/InscriptionPage';
// import Testes from './pages/test';
// import UsersList from './pages/theyUsersListPage';
//import Test from './pages/Test';
// import InscriptionPage from './pages/inscriptionPage';
// import inscriptionPage from './pages/inscriptionPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/InscriptionPage" element={<InscriptionPage />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
