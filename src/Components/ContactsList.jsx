import ContactsItem from "./ContactsItem";

import styles from "./ContactsList.module.css";

function ContactsList({contacts , deleteHandler}) {
  console.log(contacts);
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length?
        <ul className={styles.contacts}>
        {contacts.map((contact) =>
          (<ContactsItem key={contact.id} data={contact} deleteHandler={deleteHandler}/> ))}
        </ul>:
      <p className={styles.message}>No Contacts yet!</p>
      }
      
    </div>
  )
}

export default ContactsList