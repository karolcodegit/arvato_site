import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./services/firebase/Auth";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./views/Root";
import "./index.css";
import "./services/firebase/firebaseConfig";
import AppThemeProvider from "./themes/AppThemeProvider";
import { AppThemeContext } from "./themes/AppThemeContext";
import { TransportProvider } from "./services/context/TransportContext/TransportProvider";
import { UsersProvider } from "./services/firebase/users";

const RootComponent = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <AppThemeProvider>
          <TransportProvider>
            <ThemeProvider>
              <UsersProvider>
                <App />
              </UsersProvider>
            </ThemeProvider>
          </TransportProvider>
        </AppThemeProvider>
      </AuthProvider>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<RootComponent />);
}
