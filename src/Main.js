import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './Homepage';
import About from './About';
import Menu from './Menu';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import Order from './Order';
import Login from './Login';
import { useReducer } from "react";
import { fetchAPI, submitAPI } from './api';


export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
  //return ["17:00", "18:00", "19:00", "20:00"];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      //Example logic: Update times on the selected date
      const date = new Date(action.payload);
      /*const dayOfWeek = date.getDay();
      if (dayOfWeek === 6 || dayOfWeek === 0) {
          return ["17:00", "18:00", "19:00", "20:00"];
      } else {
          return initializeTimes();
      }*/

      return fetchAPI(date);
    //return ["17:00", "18:00", "19:00", "20:00"];
    case "INITIAL_TIMES":
      return initializeTimes();
    default:
      return state;
  }
};



function Main() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formdata) => {
    const success = submitAPI(formdata);
    if (success) {
      navigate('/confirmed')
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking"
          element={<BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  )
}

export default Main;