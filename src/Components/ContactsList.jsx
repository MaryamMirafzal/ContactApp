import ContactsItem from "./ContactsItem";

function ContactsList({contacts}) {
  console.log(contacts);
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length?
        <ul>
        {contacts.map((contact) =>
          (<ContactsItem key={contact.id} data={contact}/> ))}
        </ul>:
      <p>No Contacts yet!</p>
      }
      
    </div>
  )
}

export default ContactsList