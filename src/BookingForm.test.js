import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main'
import { fetchAPI } from './api';

// Mock the fetchAPI function
jest.mock('./api', () => ({
    fetchAPI: jest.fn(),
}));


test('renders the BookingForm label', () => {
    render(<BookingForm availableTimes={[]} resDate="" setResDate={() => { }} resTime="" setResTime={() => { }} nrGuests={1} setNrGuests={() => { }} occasion="" setOccasion={() => { }} />);
    const labelElement = screen.getByText(/Number of guests/i);
    expect(labelElement).toBeInTheDocument();
});


test('initializeTimes returns available times from fetchAPI', () => {
    //Old test
    //const times = initializeTimes();
    //expect(times).toEqual(["16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]);

    // Mock return value of fetchAPI
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

    const availableTimes = initializeTimes();

    expect(fetchAPI).toHaveBeenCalled();
    expect(availableTimes).toEqual(["17:00", "18:00", "19:00"]);
});

/*old test on updateTimes
test('updateTimes returns the same times that are passed in', () => {
    const state = ["16:00", "17:00", "18:00"];
    const action = { type: "UPDATE_TIMES", payload: "2024-09-02" };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
});*/

test('updateTimes updates available times based on the selected date', () => {
    fetchAPI.mockReturnValue(["19:00", "20:00", "21:00"]);

    const initialState = [];
    const action = { type: "UPDATE_TIMES", payload: "2024-09-05" };

    const updatedTimes = updateTimes(initialState, action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date("2024-09-05"));
    expect(updatedTimes).toEqual(["19:00", "20:00", "21:00"]);
});


// Mock functions for handling state updates

const mockSetResDate = jest.fn();
const mockSetResTime = jest.fn();
const mockSetNrGuests = jest.fn();
const mockSetOccasion = jest.fn();
const mockDispatch = jest.fn();
const mocksubmitForm = jest.fn();

test('allow the user to submit the form', () => {

    render(<BookingForm
        availableTimes={["16:00", "17:00", "18:00"]}
        resDate=""
        setResDate={mockSetResDate}
        resTime=""
        setResTime={mockSetResTime}
        nrGuests={1}
        setNrGuests={mockSetNrGuests}
        occasion=""
        setOccasion={mockSetOccasion}
        dispatch={mockDispatch}
        submitForm={mocksubmitForm}
    />)

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-08-25' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.submit(screen.getByRole('button', { name: /Make your reservation/i }));

    expect(mockSetResDate).toHaveBeenCalledWith('2024-08-25');
    expect(mockSetResTime).toHaveBeenCalledWith('18:00');
    expect(mockSetNrGuests).toHaveBeenCalledWith('4');
    expect(mockSetOccasion).toHaveBeenCalledWith('Birthday');
});