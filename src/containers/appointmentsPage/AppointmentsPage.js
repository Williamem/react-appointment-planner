import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';


export const AppointmentsPage = ({appointmentsData, contactsData, addAppointment}) => {
  const initialValues = {
    title: '',
    contact: '',
    date: '',
    time: '',
  }
  /*
  Define state variables for 
  appointment info
  */
  const [values, setValues] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(values.title, values.contact, values.date, values.time);
    setValues(initialValues);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          values={values}
          setValues={setValues}
          handleSubmit={handleSubmit}
          contactsData={contactsData}          
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList dataList={appointmentsData} />
      </section>
    </div>
  );
};
