import React from 'react'

const Kolan = ({schedule, index}) => {
  return (
    <tr>
      <td>Kolan Hospital</td>
      <td> {schedule && schedule[index].kolan[0]}</td>
      <td> {schedule && schedule[index].kolan[1]}</td>
      <td> {schedule && schedule[index].kolan[2]}</td>
      <td> {schedule && schedule[index].kolan[3]}</td>
      <td> {schedule && schedule[index].kolan[4]}</td>
      <td> {schedule && schedule[index].kolan[5]}</td>
    </tr>
  )
}

export default Kolan