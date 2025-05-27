import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Specials from "./components/Specials";
// Add other imports as needed

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/specials" element={<Specials />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

export default App;
