import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  values,
  setValues,
  handleSubmit,
  contactsData,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name="title" onChange={handleChange} value={values.title} placeholder="Title" />
      <input type='date' name="date" onChange={handleChange} value={values.date} min={getTodayString} />
      <input type='time' onChange={handleChange} value={values.time} name="time" />
      <ContactPicker contactsData={contactsData} handleChange={handleChange} />
      <input type="submit" value="submit" />
    </form>
  );
};
