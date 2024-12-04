import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./style/tailwind.css";
import "./style/style.css";
import "@fontsource/poppins";
import "@fontsource/k2d";
import "react-toastify/dist/ReactToastify.css";

const rootEl: HTMLDivElement = document.querySelector("#root")!;
createRoot(rootEl).render(<App />);
