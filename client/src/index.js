import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
