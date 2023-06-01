import React from 'react'

const Bau = ({schedule, index}) => {
  return (
    <tr>
      <td>Bau Campus</td>
      <td> {schedule && schedule[index].bau[0]}</td>
      <td> {schedule && schedule[index].bau[1]}</td>
      <td> {schedule && schedule[index].bau[2]}</td>
      <td> {schedule && schedule[index].bau[3]}</td>
      <td> {schedule && schedule[index].bau[4]}</td>
      <td> {schedule && schedule[index].bau[5]}</td>
    </tr>
  )
}

export default Bau