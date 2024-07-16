import Contacts from "./Contacts"

function ContactsItem({data:{ id , name , lastName , email , number } , deleteHandler}) {
  return (
    
    <li key={id}>
            <p>{name} {lastName}</p>
            <p>
              <span>📬</span>
              {email}
            </p>
            <p>
              <span>📞</span>
              {number}
            </p>
              <button onClick={()=> deleteHandler(id)}>🗑</button>
          </li>
  )
}

export default ContactsItem