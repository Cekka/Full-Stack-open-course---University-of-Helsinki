export const Total = ({parts}) => {

  const total = parts.reduce((sum, currentValue) => {
    return sum + currentValue.exercises;
  },0);

  return (
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}