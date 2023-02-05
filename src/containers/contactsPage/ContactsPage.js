import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList"

export const ContactsPage = ({ contactsData, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const initialValues = {
    name: '',
    phone: '',
    email: '',
  };

  const [values, setValues] = useState(initialValues);
  const [duplicate, setDuplicate] = useState(false)



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicate) {
    addContact(values.name, values.phone, values.email);
    return setValues(initialValues);
   } else {
    //remove later
    alert('duplicate name');
   }
  };

/*   const handleChange = (e) => {
    set
  } */

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const nameIsDuplicate = contactsData.find(contact => contact.name === values.name);
    if (nameIsDuplicate !== undefined) {
      return setDuplicate(true);
    } else {
      return setDuplicate(false);
    }
/*       const nameIsDuplicate = () => {
        const found = contactsData.find(contact => contact.name === values.name);
        console.log('dfound: ' + found)
        if (found !== undefined) {
          return true;
        }
        return false;
      };
      console.log('duplicaste: ' + duplicate)

      if (nameIsDuplicate()) {
        setDuplicate(true);
      } else {
        setDuplicate(false);
      } */
  }, [values.name, contactsData, duplicate])

  return (
    <div>
      <section>
        <h2>Add Contacts</h2>
        <p style={{color: 'red'}}>{duplicate ? 'Name already exists' : ''}</p>
        <ContactForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList dataList={contactsData} />
      </section>
    </div>
  );
};
