import { PersonItem } from "./PersonItem"

export const Persons = ({searchName, persons}) => {

  return (
    <div>
      {searchName ?
        persons.filter(person =>
          person.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
        ).map(person => <PersonItem person={person} key={person.name}/>) :
        persons.map(person => <PersonItem person={person} key={person.name}/>)
      }
    </div>
  )
}