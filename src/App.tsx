import React from 'react';
//import inscriptionPage from './pages/inscriptionPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetUsers from './pages/GetUsers';
import InscriptionPage from './pages/InscriptionPage';
import PatchUsers from './pages/PatchUsers';
import NewTask from './pages/NewTask';
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

          <Route path="/GetUsers" element={<GetUsers />} />

          <Route path="/PatchUsers/:id" element={<PatchUsers />} />

          <Route path="/NewTask" element={<NewTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
