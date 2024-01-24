import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./services/firebase/Auth";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./views/Root";
import "./index.css";
import "./services/firebase/firebaseConfig";

import { AppThemeContext } from "./contexts/themes/AppThemeContext";
import AppThemeProvider from "./contexts/themes/AppThemeProvider";
// import { TransportProvider } from "./contexts/transport/TransportProvider";
import { UsersProvider } from "./services/firebase/users";
import { SettingsProvider } from "./contexts/settings/SettingsProvider";

const RootComponent = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <AppThemeProvider>
          {/* <TransportProvider> */}
          <SettingsProvider>
            <ThemeProvider>
              <UsersProvider>
                <App />
              </UsersProvider>
            </ThemeProvider>
            </SettingsProvider>
          {/* </TransportProvider> */}
        </AppThemeProvider>
      </AuthProvider>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<RootComponent />);
}
