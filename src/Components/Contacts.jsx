import { useState } from "react"

import ContactsList from "./ContactsList";

function Contacts() {
    const [contacts, setContacts] = useState([])
    const [contact , setContact ] = useState({
        name:'',
        lastName:'',
        phone:'',
        email:'', 
    })
    const changeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact)=> ({...contact,[name]:value}))
    }
    const addContacts = () =>{
      setContacts( contacts => [...contacts , contact])
      console.log(contacts);
    }
  return (
    
    <div>
        <div>
            <input type="text"
             placeholder="Name"
             value={contact.name}
             onChange={changeHandler}
             name="name"
              />
            <input type="text"
             placeholder="Last Name"
             value={contact.lastName}
             onChange={changeHandler}
             name="lastName"
              />
            <input type="email"
             placeholder="Email"
             value={contact.email}
             onChange={changeHandler}
             name="email"
              />
            <input type="number" placeholder="Phone"
             value={contact.phone}
             onChange={changeHandler}
             name="phone"
              />
            <button onClick={addContacts}>Add Contact</button>
        </div>
        <ContactsList contacts={contacts} />
    </div>
  )
}

export default Contacts