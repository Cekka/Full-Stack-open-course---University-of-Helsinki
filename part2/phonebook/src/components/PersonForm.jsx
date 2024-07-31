export const PersonForm = ({newName, newTelNumber, onAddPerson, onNameChange, onTelNumberChange}) => {
  return (
    <form onSubmit={onAddPerson}>
      <h2>add a new</h2>
      <div>name: <input value={newName} onChange={onNameChange}/></div>
      <div>number: <input value={newTelNumber} onChange={onTelNumberChange}/></div>
      <div><button type="submit">add</button></div>
  </form>
  )
}