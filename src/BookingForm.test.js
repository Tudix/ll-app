import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main'


test('renders the BookingForm label', () => {
  render(<BookingForm availableTimes={[]} resDate="" setResDate={() => {}} resTime="" setResTime={() => {}} nrGuests={1} setNrGuests={() => {}} occasion="" setOccasion={() => {}} />);
  const labelElement = screen.getByText(/Number of guests/i);
  expect(labelElement).toBeInTheDocument();
});


test('initializeTimes returns the expected times', () => {
    const times = initializeTimes();
    expect(times).toEqual(["16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]);
});

test('updateTimes returns the same times that are passed in', () => {
    const state = ["16:00", "17:00", "18:00"];
    const action = { type: "UPDATE_TIMES", payload: "2024-09-02" };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
});


// Mock functions for handling state updates

const mockSetResDate = jest.fn();
const mockSetResTime = jest.fn();
const mockSetNrGuests = jest.fn();
const mockSetOccasion = jest.fn();
const mockDispatch = jest.fn();

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
    />)

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/Choose date/i),{ target: {value: '2024-08-25'} });
    fireEvent.change(screen.getByLabelText(/Choose time/i),{ target: {value: '18:00'} });
    fireEvent.change(screen.getByLabelText(/Number of guests/i),{ target: {value: '4'} });
    fireEvent.change(screen.getByLabelText(/Occasion/i),{ target: {value: 'Birthday'} });

    fireEvent.submit(screen.getByRole('button', {name: /Make your reservation/i}));

    expect(mockSetResDate).toHaveBeenCalledWith('2024-08-25');
    expect(mockSetResTime).toHaveBeenCalledWith('18:00');
    expect(mockSetNrGuests).toHaveBeenCalledWith('4');
    expect(mockSetOccasion).toHaveBeenCalledWith('Birthday');
});