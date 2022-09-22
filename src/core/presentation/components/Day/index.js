import styles from "./Day.module.css";
import Workout from "../Workout";

const mockWorkouts = [
  {
    title: "Chest Day - with Arm exercises",
    date: "06",
    id: 1,
    sort: 1,
  },
  {
    title: "led day",
    date: "07",
    id: 2,
    sort: 1,
  },
  {
    title: "arm day",
    date: "07",
    id: 3,
    sort: 2,
  },
];

function Day(props) {
  const { date, weekday, isToday = false } = props;

  function renderWorkout(workout) {
    return (
      workout.date == date && (
        <Workout {...workout} key={`workout_${workout.id}`} />
      )
    );
  }

  return (
    <div className={styles.day}>
      <div className={styles.weekday}>{weekday}</div>
      <div className={styles.box}>
        <div className={[styles.date, isToday && styles.today].join(" ")}>
          {date}
        </div>
        <div className={styles.boxArrange}>
          {mockWorkouts.map(renderWorkout)}
        </div>
      </div>
    </div>
  );
}

export default Day;
