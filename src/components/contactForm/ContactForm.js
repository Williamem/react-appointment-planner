import React from "react";

export const ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        placeholder="Name"
        name="name"
        onChange={props.handleChange}
        value={props.values.name}>
      </input>
      <input
        type='tel'
        placeholder="Phone Number"
        name="phone"
        onChange={props.handleChange}
        value={props.values.phone}>
      </input>
      <input
        type='email'
        placeholder="E-Mail"
        name="email"
        onChange={props.handleChange}
        value={props.values.email}>
      </input>
      <button>Submit</button>
    </form>
  );
};


/* name,
setName,
phone,
setPhone,
email,
setEmail,
handleSubmit */
