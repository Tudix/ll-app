import BookingForm from "./BookingForm";
import { useState } from "react";

function BookingPage({ availableTimes, dispatch, submitForm }) {

  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState(availableTimes[0]);
  const [nrGuests, setNrGuests] = useState(1);
  const [occasion, setOccasion] = useState("occasion");

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        resDate={resDate}
        setResDate={setResDate}
        resTime={resTime}
        setResTime={setResTime}
        nrGuests={nrGuests}
        setNrGuests={setNrGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
}

export default BookingPage;