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
  dispatch
}) {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  const handleDateChange = (e) => {
    setResDate(e.target.value)
    // Dispatch an action to update the available times
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value})
  };

    return (
      <>
          <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} className="form-booking" onSubmit={handleSubmit} >
            <label htmlFor="res-date" >Choose date</label>
            <input type="date" id="res-date" name="res-date"
              value={resDate}
              onChange={handleDateChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="res-time"
              value={resTime}
              onChange={(e) => setResTime(e.target.value)}
            >
              {availableTimes.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests"
              value={nrGuests}
              onChange={(e) => setNrGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
            </form>

            Check resDate: {resDate} <br/>
            Check resTime: {resTime} <br/>
            Check guests: {nrGuests} <br/>
            Check occasion: {occasion} <br/>
      </>
    );
  }

  export default BookingForm;