import React, { useContext, useState } from "react";
import { AuthContext } from "../services/firebase/Auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import Cookies from "../components/Common/Cookies/Cookies";
import Header from "../components/Layout/Header/Header";
import { menu } from "../data/Menu";
import Login from "./Login/Login";

function Content() {
  const [cookies, setCookies] = useState(false);
  const [showSidebar, showSetSidebar] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    showSetSidebar(!showSidebar);
  } 

  return (
    <div className="w-full h-screen flex justify-between leading-default">
        <Sidebar showSidebar={showSidebar} toggle={toggle} setToggle={setToggle}/>
        <main className="w-full min-h-full xl:ml-60 transition-all duration-500 ease-in-out rounded-xl p-6">
          <div className="flex flex-col">
            <Header toggleSidebar={toggleSidebar} toggle={toggle}/>
            <div className="w-full px-6 py-6 mx-auto h-screen">
              <Routes>
                {menu.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component data={null} />}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </main>
        <Cookies show={cookies} onClose={() => setCookies(!cookies)} />
    </div>
  );
}

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={currentUser ? <Content /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
