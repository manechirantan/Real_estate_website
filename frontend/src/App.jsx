import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";
import AdminPanel from "./admin/adminpanel";
export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" toastOptions={{ style: { fontSize: "13px" } }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}