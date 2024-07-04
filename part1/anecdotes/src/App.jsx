import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }

  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleClickVote = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
  }

  const maxIndex = vote.indexOf(Math.max(...vote));

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <div>
        <button onClick={handleClickVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <div>
        {anecdotes[maxIndex]}
      </div>
    </div>
  )
}

export default App
