import React from "react";

export const ContactPicker = ({contactsData, handleChange}) => {
  return (
    <select>
    <option selected="selected" value="No contact">Select a contact</option>
      {
        contactsData.map(contact => {
          return <option value={contact.name} onChange={handleChange}>{contact.name}</option>
        })
      }
    </select>
  );
};
