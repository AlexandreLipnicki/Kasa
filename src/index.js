import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './styles/main.scss';

const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);