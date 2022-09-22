import Day from "../Day";
import styles from "./Week.module.css";

const weekdays = [
  {
    weekday: "MON",
    date: "05",
  },
  {
    weekday: "TUE",
    date: "06",
  },
  {
    weekday: "wed",
    date: "07",
  },
  {
    weekday: "thu",
    date: "08",
  },
  {
    weekday: "fri",
    date: "09",
    isToday: true,
  },
  {
    weekday: "sat",
    date: "10",
  },
  {
    weekday: "sun",
    date: "11",
  },
];

function Week() {
  return (
    <div className={styles.week}>
      {weekdays.map((w, index) => (
        <Day {...w} key={`day_${index}`} />
      ))}
    </div>
  );
}

export default Week;
