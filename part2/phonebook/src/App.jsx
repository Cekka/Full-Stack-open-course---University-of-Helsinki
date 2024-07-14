import { useState } from 'react'
import { Filter } from '../components/Filter';
import { PersonForm } from '../components/PersonForm';
import { Person } from '../components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newTelNumber, setNewTelNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.find(value => value.name.toLocaleLowerCase() === newName.toLocaleLowerCase())) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newTelNumber,
        id: persons.length +1
      }
      setPersons(persons.concat(personObject));
    }
    setNewName('');
    setNewTelNumber('');
  }

  const handleTelNumberChange = (event) => {
    setNewTelNumber(event.target.value);
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} onSearchName={handleSearchName}/>
      <PersonForm
        newName={newName}
        newTelNumber={newTelNumber}
        onAddPerson={addPerson}
        onNameChange={handleNameChange}
        onTelNumberChange={handleTelNumberChange}/>
      <h2>Numbers</h2>
      <Person searchName={searchName} persons={persons}/>
    </div>
  )
}

export default App