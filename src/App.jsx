import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import BookingPage from "./components/BookingPage";
import OrderOnline from "./components/OrderOnline";
import Specials from "./components/Specials";
import { useReducer } from "react";

// Initialize available times
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer to update available times based on selected date
const updateTimes = (state, action) => {
  // In future, use action.date to update times dynamically
  return initializeTimes();
};

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/booking-page"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/specials" element={<Specials />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
