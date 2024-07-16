import ContactsItem from "./ContactsItem";

function ContactsList({contacts , deleteHandler}) {
  console.log(contacts);
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length?
        <ul>
        {contacts.map((contact) =>
          (<ContactsItem key={contact.id} data={contact} deleteHandler={deleteHandler}/> ))}
        </ul>:
      <p>No Contacts yet!</p>
      }
      
    </div>
  )
}

export default ContactsList