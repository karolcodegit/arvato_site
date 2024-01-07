import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./utils/AuthContext";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./views/Root";
import "./index.css";
import "./utils/firebase";
import AppThemeProvider from "./themes/AppThemeProvider";
import { AppThemeContext } from "./themes/AppThemeContext";
import { TransportProvider } from "./TransportContext/TransportProvider";
import EditForm from "./components/EditForm/EditForm";

const RootComponent = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <AppThemeProvider>
          <TransportProvider>
            <ThemeProvider>
              <App />
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
