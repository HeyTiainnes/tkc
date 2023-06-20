// // import React from 'react';

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import GetUsers from './pages/GetUsers';
// import InscriptionPage from './pages/InscriptionPage';
// import PatchUsers from './pages/PatchUsers';
// //import NewTask from './pages/NewTask';
// //import Navbar from './components/BurgerMenu';
// import Home from './pages/home';
// import Tasks from './pages/TaskLists';
// import NewTask from './pages/NewTask'
// import LoginForm from './pages/ConnexionPage';
// import Nav from './components/Nav';
// import PatchTask from './pages/PatchTask';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Nav />
//         <Routes>

//           <Route path="/Home" element={<Home />} />
//           <Route path="/InscriptionPage" element={<InscriptionPage />} />
//           <Route path="/TaskLists" element={<Tasks />} />
//           <Route path="/GetUsers" element={<GetUsers />} />
//           <Route path="/PatchUsers/:id" element={<PatchUsers />} />
//           <Route path="/ConnexionPage" element={<LoginForm onLoginSuccess={function (): void {
//             throw new Error('Function not implemented.');
//           }} />} />

//           <Route path="/NewTask" element={<NewTask task={{
//             id: 0,
//             designation: '',
//             dead_line: '',
//             notes: '',
//             done: false
//           }} />} />
//           <Route path="/PatchTask/:id" element={<PatchTask task={{
//             id: 0,
//             designation: "",
//             dead_line: "",
//             notes: "",
//             done: false
//           }} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetUsers from './pages/GetUsers';
import InscriptionPage from './pages/InscriptionPage';
import PatchUsers from './pages/PatchUsers';
import Home from './pages/home';
import Tasks from './pages/TaskLists';
import NewTask from './pages/NewTask';
import LoginForm from './pages/ConnexionPage';
import Nav from './components/Nav';
import PatchTask from './pages/PatchTask';
import NewCheckList from './pages/NewCheckList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InscriptionPAge" element={<InscriptionPage />} />
          <Route path="/TaskLists" element={<Tasks />} />
          <Route path="/GetUsers" element={<GetUsers />} />
          <Route path="/PatchUsers/:id" element={<PatchUsers />} />
          <Route path="/ConnexionPage" element={<LoginForm onLoginSuccess={function (): void {
            throw new Error('Function not implemented.');
          }} />} />
          <Route path="/NewTask" element={<NewTask task={{
            id: 0,
            designation: '',
            dead_line: '',
            notes: '',
            done: false
          }} />} />
          <Route path="/PatchTask/:id" element={<PatchTask task={{
            id: 0,
            designation: "",
            dead_line: "",
            notes: "",
            done: false
          }} />} />
          <Route path="/NewCheckList" element={<NewCheckList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
