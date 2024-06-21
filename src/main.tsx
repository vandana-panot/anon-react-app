import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/index.tsx";
import AuthProvider from "./provider/AuthProvider.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
