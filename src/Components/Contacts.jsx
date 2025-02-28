
// export default Contacts
import { useState } from "react";
import ContactsList from "./ContactsList";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";

const inputs = [
  { type: "text", name: "name", placeholder: "Name" },
  { type: "text", name: "lastName", placeholder: "Last Name" },
  { type: "email", name: "email", placeholder: "Email" },
  { type: "number", name: "phone", placeholder: "Phone" },
];

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState('');
  const [contact, setContact] = useState({
    id:'',
    name: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };
  const deleteHandler  = (id)=>{
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)
  }

  const addContacts = () => {
    if (!contact.name || !contact.lastName || !contact.phone || !contact.email) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert('');
    const newContact = {... contact , id: v4()}
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: '',
      lastName: '',
      phone: '',
      email: '',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input) => (
          <input
            key={input.name}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addContacts}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
