import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetUsers from './pages/GetUsers';
import InscriptionPage from './pages/InscriptionPage';
import PatchUsers from './pages/PatchUsers';
import NewTask from './pages/NewTask';
import Navbar from './components/BurgerMenu';
import Home from './pages/home';
import TaskLists from './pages/TaskLists';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/InscriptionPage" element={<InscriptionPage />} />

          <Route path="/TaskLists" element={<TaskLists />} />
          <Route path="/GetUsers" element={<GetUsers />} />

          <Route path="/PatchUsers/:id" element={<PatchUsers />} />

          <Route path="/NewTask" element={<NewTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
