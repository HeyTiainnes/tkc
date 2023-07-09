// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetUsers from "./pages/GetUsers";
import InscriptionPage from "./pages/InscriptionPage";
import PatchUsers from "./pages/PatchUsers";
import Home from "./pages/home";
import Tasks from "./pages/TaskLists";
import NewTask from "./pages/NewTask";
import LoginForm from "./pages/ConnexionPage";
import Nav from "./components/Nav";
import PatchTask from "./pages/PatchTask";
import NewCheckList from "./pages/NewCheckList";
import TaskDetail from "./pages/TasksDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InscriptionPage" element={<InscriptionPage />} />
          <Route path="/TaskLists" element={<Tasks />} />
          <Route path="/GetUsers" element={<GetUsers />} />
          <Route path="/PatchUsers/:id" element={<PatchUsers />} />
          <Route
            path="/ConnexionPage"
            element={<LoginForm onLoginSuccess={() => { }} />}
          />
          <Route path="/TaskDetails/:taskId" element={<TaskDetail />} />
          <Route
            path="/NewTask"
            element={<NewTask redirectTo="/TaskLists" />}
          />
          <Route
            path="/PatchTask/:id"
            element={<PatchTask task={{ id: 0, designation: "", deadline: "", notes: "", done: false }} />}
          />
          <Route path="/NewCheckList/:taskId" element={<NewCheckList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
