import { useEffect, useState } from "react";
import { submitAPI } from "./api";

function BookingForm({
  availableTimes,
  resDate,
  setResDate,
  resTime,
  setResTime,
  nrGuests,
  setNrGuests,
  occasion,
  setOccasion,
  dispatch,
  submitForm
}) {

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(
      resDate !== "" &&
      resTime !== "" &&
      nrGuests >= 1 && nrGuests <= 10 &&
      occasion !== ""
    );
  }, [resDate, resTime, nrGuests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date: resDate,
      time: resTime,
      quests: nrGuests,
      occasion: occasion
    };

    if (formValid) {
      submitForm(formData);
    }
  };

  const handleDateChange = (e) => {
    setResDate(e.target.value)
    // Dispatch an action to update the available times
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value })
  };

  return (
    <>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} className="form-booking" onSubmit={handleSubmit} noValidate>
        <label htmlFor="res-date" >Choose date</label>
        <input type="date" id="res-date" name="res-date"
          value={resDate}
          onChange={handleDateChange}
          required
          min={new Date().toISOString().split("T")[0]}
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="res-time"
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
          required
        >
          <option value="" disabled>Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" id="guests" name="guests"
          value={nrGuests}
          onChange={(e) => setNrGuests(e.target.value)}
          required
          min="1"
          max="10"
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="" disabled>Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit"
          value="Make Your reservation"
          disabled={!formValid}
        />
      </form>

      Check resDate: {resDate} <br />
      Check resTime: {resTime} <br />
      Check guests: {nrGuests} <br />
      Check occasion: {occasion} <br />
    </>
  );
}

export default BookingForm;