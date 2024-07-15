
function ContactsItem({data:{ id , name , lastName , email , number }}) {
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
              <button>🗑</button>
          </li>
  )
}

export default ContactsItem