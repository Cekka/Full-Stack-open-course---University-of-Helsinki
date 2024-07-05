import { Part } from "./Part"

export const Content = ({ parts }) => {
  return (
      <div>
        {parts.map((value) =>
          <Part
          key={value.id}
          name={value.name}
          exercises={value.exercises}/>)}
      </div>
  )
}