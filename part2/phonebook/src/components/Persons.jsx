export const Person = ({searchName, persons}) => {
  return (
    <div>
      {searchName ?
        persons.filter(person =>
          person.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
        ).map(person =>
          <p key={person.name}>{person.name} {person.number} {person.id}</p>
        ) :
        persons.map(person =>
          <p key={person.name}>{person.name} {person.number} {person.id}</p>
        )
      }
    </div>
  )
}