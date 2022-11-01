import PetList from "./PetList"
import "./Employee.css"
import { useState } from "react"

export const Employee = ({ employee }) => {
  const [showpets, setpetsShows] = useState(false)

  function showPetList() {
    setpetsShows(!showpets)
  }

  return (
    <article className="employee">
      <h3>
        {employee.prefix} {employee.firstName} {employee.lastName}
        {employee.postfix && ", " + employee.postfix}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={showPetList}>
        {showpets ? "Hide Pets" : "Show Pets"}
      </button>
      {showpets && <PetList employee={employee} />}
    </article>
  )
}

export default Employee
