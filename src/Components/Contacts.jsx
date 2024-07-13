import { useState } from "react"

function Contacts() {
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
    const addContacts = (event) =>{
        console.log(contact);
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
    </div>
  )
}

export default Contacts