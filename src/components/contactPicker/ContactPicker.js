import React from "react";

export const ContactPicker = ({contactsData, handleChange}) => {
  return (
    <select>
    <option>Select a contact</option>
      {
        contactsData.map(contact => {
          return <option value={contact.name} onChange={handleChange}>{contact.name}</option>
        })
      }
    </select>
  );
};
