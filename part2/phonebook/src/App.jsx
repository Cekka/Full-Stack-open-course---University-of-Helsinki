import { useState, useEffect } from 'react'
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';
import { getAll, create, update} from './services/persons';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newTelNumber, setNewTelNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const isPersonPresent = persons.find(value => value.name.toLocaleLowerCase() === newName.toLocaleLowerCase())
    if (isPersonPresent) {
      if (isPersonPresent.number === newTelNumber) {
        alert(`${newName} is already added to phonebook`);
      } else {
          if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            update({...isPersonPresent, number: newTelNumber});
        }
      }
    } else {
      const personObject = {
        name: newName,
        number: newTelNumber,
        id: (persons.length +1).toString()
      }
      create(personObject)
        .then(response => {
          setPersons(previousPersons => [...previousPersons, response.data]);
        })
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
      <Persons searchName={searchName} persons={persons}/>
    </div>
  )
}

export default App