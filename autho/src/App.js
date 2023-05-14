import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./Main";
import Signup from "./pages/Signup";
import Mensupervisor from "./pages/Mensupervisor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/netflix" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />}></Route>
        <Route path="/mensupervisor" element={<Mensupervisor />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
