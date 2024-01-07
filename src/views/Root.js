import React, { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import TopHeader from "../components/TopHeader/TopHeader";
import Cookies from "../components/Cookies/Cookies";
import Login from "../components/Login/Login";
import { routes } from "../data/routes";

function Content() {
  const [cookies, setCookies] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="h-screen m-0 font-sans antialiased dark:bg-slate-900 font-normal text-base leading-default bg-gray-200 text-slate-500 min-h-75">
      <div className="fixed w-full bg-gradient-to-r dark:from-gray-700 dark:to-sky-900 from-sky-600 to-sky-950 min-h-75 shadow-lg"></div>
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}/>
      <main className={`relative min-h-full transition-all duration-500 ease-in-out ${isCollapsed ? 'xl:ml-28' : 'xl:ml-68'} rounded-xl px-6 py-6`}>
        <div className="relative flex flex-wrap items-center px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start">
          {/* <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
            <Pagination />
            <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
              <Search />
              <TopHeader />
            </div>
          </div> */}
          <TopHeader />

        </div>
        <div className="w-full px-6 py-6 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3">
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component data={null} />}
                  />
                ))}
              </Routes>
            </div>
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
