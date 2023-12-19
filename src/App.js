import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersDetail from "./pages/UsersDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersDetail />} />
        <Route path="user/:posts" element={<UsersDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
