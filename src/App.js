import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contactsData, setContactsData] = useState([]);
 const [appointmentsData, setAppointmentsData] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addContact = (name, phone, email) => {
  const contactsObject = {
    name: name,
    phone: phone,
    email: email,
  }
  return setContactsData([...contactsData, contactsObject]);
 }

 const addAppointment = (title, contact, date, time) => {
  const appointmentObject = {
    title: title,
    contact: contact,
    date: date,
    time: time,
  }
  return setAppointmentsData([...appointmentsData, appointmentObject])
 }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
              contactsData={contactsData}
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage              
            appointmentsData={appointmentsData}
            contactsData={contactsData}
            addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
