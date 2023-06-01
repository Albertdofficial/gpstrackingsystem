import React from "react";
import Arda from "../components/Arda";
import Bau from "../components/Bau";
import Industrial from "../components/Industrial";
import Kolan from "../components/Kolan";
import Sari from "../components/Sari";

import { useCollection } from "../hooks/useCollection";

import "./schedule.css";

const Schedule = () => {
  const { documents: schedule } = useCollection("schedule");

  schedule && console.log(schedule);

  return (
    <div className="schedule">
      <table className="table table-striped table-bordered">
        <tbody>
          <Bau schedule={schedule} index={2} />
          <Sari schedule={schedule} index={5}/>
          <Arda schedule={schedule} index={0} />
          <Kolan schedule={schedule} index={1} />
          <Industrial schedule={schedule} index={4} />
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
