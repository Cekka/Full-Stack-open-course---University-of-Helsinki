import { useState } from 'react'

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positiveFeedback} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
  }

  const all = good+neutral+bad;
  const average = ((good*1)+(neutral*0)+(bad*-1))/all;
  const positiveFeedback = good/all*100;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positiveFeedback={positiveFeedback}
      />
    </div>
  )
}

export default App