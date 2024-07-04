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
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="good" value={props.good}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="neutral" value={props.neutral}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="bad" value={props.bad}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="all" value={props.all}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" value={props.average}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="positive" value={props.positiveFeedback}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClickGood}>good</button>
      <button onClick={props.handleClickNeutral}>neutral</button>
      <button onClick={props.handleClickBad}>bad</button>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
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
  const positiveFeedback = (good/all*100) + ' %';

  return (
    <div>
      <h1>give feedback</h1>

      <Button
      handleClickGood={handleClickGood}
      handleClickNeutral={handleClickNeutral}
      handleClickBad={handleClickBad}
      />

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