


// function Contacts() {
//     const [contacts, setContacts] = useState([])
//     const [ alert , setAlert ] = useState(``)
//     const [contact , setContact ] = useState({
//         name:'',
//         lastName:'',
//         phone:'',
//         email:'', 
//     })
    
    
//     const changeHandler = (event)=>{
//         const name = event.target.name;
//         const value = event.target.value;
//         setContact((contact)=> ({...contact,[name]:value}))
//     }
//     const addContacts = () =>{
//       if( !contact.name || !contact.lastName || !contact.phone || !contact.email ){
//         setAlert("Please enter valid data! ")
//         return;
//       }
//       setAlert(``);
//       setContacts( contacts => [...contacts , contact])
//       setContact({
//         name:"",
//         lastName:"",
//         phone:"",
//         email:"",
//       })
//     }
//   return (
    
//     <div>
//         <div>
//             {
//               inputs.map((input)=> 
//                 // eslint-disable-next-line react/jsx-key
//                 <input type={input.type} 
//                 key={input.name}
//                 name={input.name}
//                 placeholder={input.placeholder} 
//                 value={contact[input.name]}
//                 onChange={changeHandler}/>
//               )
              
//             }
            
//             <button onClick={addContacts}>Add Contact</button>
//         </div>
//         <div>{alert && <p>{alert}</p>}</div>
//         <ContactsList contacts={contacts} />
//     </div>
//   )
// }

// export default Contacts
import { useState } from "react";
import ContactsList from "./ContactsList";

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
    name: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const addContacts = () => {
    if (!contact.name || !contact.lastName || !contact.phone || !contact.email) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert('');
    setContacts((prevContacts) => [...prevContacts, contact]);
    setContact({
      name: '',
      lastName: '',
      phone: '',
      email: '',
    });
  };

  return (
    <div>
      <div>
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
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
