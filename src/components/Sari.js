import React from "react";

const Sari = ({ schedule, index }) => {
  return (
    <tr>
      <td>Sari Tas Everli</td>
      <td> {schedule && schedule[index].sari[0]}</td>
      <td> {schedule && schedule[index].sari[1]}</td>
      <td> {schedule && schedule[index].sari[2]}</td>
      <td> {schedule && schedule[index].sari[3]}</td>
      <td> {schedule && schedule[index].sari[4]}</td>
      <td> {schedule && schedule[index].sari[5]}</td>
    </tr>
  );
};

export default Sari;
