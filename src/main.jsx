import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  AddTransProvider,
  FormErrorProvider,
  NavbarProvider,
  TrnascProvider,
} from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NavbarProvider>
    <TrnascProvider>
      <AddTransProvider>
        <FormErrorProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </FormErrorProvider>
      </AddTransProvider>
    </TrnascProvider>
  </NavbarProvider>
);
