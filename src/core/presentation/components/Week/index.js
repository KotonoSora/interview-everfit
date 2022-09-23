import Day from "../Day";
import styles from "./Week.module.css";
import CalendarContext from "../../../application/context";
import { useContext } from "react";

function Week() {
  const { weekdays } = useContext(CalendarContext);

  return (
    <div className={styles.week}>
      {weekdays.map((w, index) => (
        <Day {...w} key={`day_${index}`} />
      ))}
    </div>
  );
}

export default Week;
