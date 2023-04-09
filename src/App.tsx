
// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import GetUsers from './pages/GetUsers';
// import InscriptionPage from './pages/InscriptionPage';
// import PatchUsers from './pages/PatchUsers';
// import Home from './pages/home';
// import Tasks from './pages/TaskLists';
// import NewTask from './pages/NewTask';
// import LoginForm from './pages/ConnexionPage';
// import Nav from './components/Nav';
// import PatchTask from './pages/PatchTask';
// import ConnexionPage from './pages/ConnexionPage';
// import UserContext from './contexts/UserContext';
// import Header from './components/Header';

// export interface User {
//   id: number;
//   name: string;
//   mail: string;
//   password: string;
// }

// function App() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loggedIn, setLoggedIn] = useState<boolean>(false);

//   console.log("User state: ", user);
//   return (
//     <UserContext.Provider value={user}>
//       <BrowserRouter>
//         {/* <Header /> */}
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/InscriptionPage" element={<InscriptionPage />} />
//           <Route path="/TaskLists" element={<Tasks />} />
//           <Route path="/GetUsers" element={<GetUsers />} />
//           <Route path="/PatchUsers/:id" element={<PatchUsers />} />
//           <Route
//             path="/ConnexionPage"
//             element={
//               <ConnexionPage
//                 onLoginSuccess={() => setLoggedIn(true)}
//                 setUser={setUser}
//               />
//             }
//           />
//           <Route
//             path="/NewTask"
//             element={
//               <NewTask
//                 task={{
//                   id: 0,
//                   designation: '',
//                   dead_line: '',
//                   notes: '',
//                   done: false,
//                 }}
//               />
//             }
//           />
//           <Route
//             path="/PatchTask/:id"
//             element={
//               <PatchTask
//                 task={{
//                   id: 0,
//                   designation: '',
//                   dead_line: '',
//                   notes: '',
//                   done: false,
//                 }}
//               />
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </UserContext.Provider>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetUsers from './pages/GetUsers';
import InscriptionPage from './pages/InscriptionPage';
import PatchUsers from './pages/PatchUsers';
import Home from './pages/home';
import Tasks from './pages/TaskLists';
import NewTask from './pages/NewTask';
import LoginForm from './pages/ConnexionPage';
import Nav from './components/Nav';
import PatchTask from './pages/PatchTask';
import ConnexionPage from './pages/ConnexionPage';
import UserContext from './contexts/UserContext';
import Header from './components/Header';

export interface User {
  id: number;
  name: string;
  mail: string;
  password: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleUserChange = (newUser: User | null) => {
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
    setUser(newUser);
  };

  console.log("User state: ", user);
  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InscriptionPage" element={<InscriptionPage />} />
          <Route path="/TaskLists" element={<Tasks />} />
          <Route path="/GetUsers" element={<GetUsers />} />
          <Route path="/PatchUsers/:id" element={<PatchUsers />} />
          <Route
            path="/ConnexionPage"
            element={
              <ConnexionPage
                onLoginSuccess={() => setLoggedIn(true)}
                setUser={handleUserChange}
              />
            }
          />
          <Route
            path="/NewTask"
            element={
              <NewTask
                task={{
                  id: 0,
                  designation: '',
                  dead_line: '',
                  notes: '',
                  done: false,
                }}
              />
            }
          />
          <Route
            path="/PatchTask/:id"
            element={
              <PatchTask
                task={{
                  id: 0,
                  designation: '',
                  dead_line: '',
                  notes: '',
                  done: false,
                }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
