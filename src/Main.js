import {Routes,Route} from 'react-router-dom'
import HomePage from './Homepage';
import About from './About';
import Menu from './Menu';
import BookingPage from './BookingPage';
import { useReducer } from "react";


export const initializeTimes = () => {
    return[
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00"
    ];
};

export const updateTimes = (state,action) => {
    switch(action.type) {
        case "UPDATE_TIMES":
            //Example logic: Update times on the selected date
            const date = new Date(action.payload);
            const dayOfWeek = date.getDay();

            /*if (dayOfWeek === 6 || dayOfWeek === 0) {
                return ["17:00", "18:00", "19:00", "20:00"];
            } else {
                return initializeTimes();
            }*/
           return state;
        case "INITIAL_TIMES":
            return initializeTimes();
    default:
        return state;
    }
};
function Main(){

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return(
    <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/booking"
                element={<BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch} />}/>
        </Routes>
    </main>
    )
}

export default Main;