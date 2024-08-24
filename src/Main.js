import {Routes,Route} from 'react-router-dom'
import HomePage from './Homepage';
import About from './About';
import Menu from './Menu';
import BookingPage from './BookingPage';

function Main(){
    return(
    <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/booking" element={<BookingPage />}/>
        </Routes>
    </main>
    )
}

export default Main;