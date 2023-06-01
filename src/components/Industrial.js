import React from 'react'

const Industrial = ({schedule, index}) => {
  return (
    <tr>
      <td>Industrial Area</td>
      <td> {schedule && schedule[index].industrial[0]}</td>
      <td> {schedule && schedule[index].industrial[1]}</td>
      <td> {schedule && schedule[index].industrial[2]}</td>
      <td> {schedule && schedule[index].industrial[3]}</td>
      <td> {schedule && schedule[index].industrial[4]}</td>
      <td> {schedule && schedule[index].industrial[5]}</td>
    </tr>
  )
}

export default Industrial