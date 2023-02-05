import React from "react";

export const ContactForm = ({values, setValues, handleSubmit}) => {

  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={values.name}>
      </input>
      <input
        type='tel'
        placeholder="Phone Number"
        name="phone"
        onChange={handleChange}
        value={values.phone}>
      </input>
      <input
        type='email'
        placeholder="E-Mail"
        name="email"
        onChange={handleChange}
        value={values.email}>
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
