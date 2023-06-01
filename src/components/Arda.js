import React from "react";

const BusStop = ({ schedule, index }) => {
  return (
    <tr>
      <td>Arda Market</td>
      <td> {schedule && schedule[index].arda[0]}</td>
      <td> {schedule && schedule[index].arda[1]}</td>
      <td> {schedule && schedule[index].arda[2]}</td>
      <td> {schedule && schedule[index].arda[3]}</td>
      <td> {schedule && schedule[index].arda[4]}</td>
      <td> {schedule && schedule[index].arda[5]}</td>
    </tr>
  );
};

export default BusStop;
