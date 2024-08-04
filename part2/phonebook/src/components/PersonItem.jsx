import { deleteItem } from "../services/persons"

export const PersonItem = ({person}) => {

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      deleteItem(person);
    }
  }
  return (
  <p>
    {person.name} {person.number} {""}
    <button onClick={()=>handleDelete(person)}>delete</button>
  </p>
  )
}