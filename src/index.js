import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './styles/styles.css';

const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);