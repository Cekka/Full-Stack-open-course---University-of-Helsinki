import { useState, useEffect } from 'react'
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { Person } from './components/Persons';
import axios from 'axios';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newTelNumber, setNewTelNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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