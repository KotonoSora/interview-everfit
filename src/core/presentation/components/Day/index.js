import { useContext } from "react";

import styles from "./Day.module.css";
import Workout from "../Workout";
import CalendarContext from "../../../application/context";
import { handleDropWorkoutChangeDate } from "../../../infrastructure/dragDropWorkout";

function Day(props) {
  const { workouts, dispatch } = useContext(CalendarContext);
  const { date, weekday, isToday = false } = props;

  function renderWorkout(workout) {
    return <Workout {...workout} key={`workout_${workout.id}`} />;
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    handleDropWorkoutChangeDate(e, workouts, props, dispatch);
  }

  return (
    <div className={styles.day} onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className={styles.weekday}>{weekday}</div>
      <div className={styles.box}>
        <div className={[styles.date, isToday && styles.today].join(" ")}>
          {date}
        </div>
        <div className={styles.boxArrange}>
          {workouts
            .filter((workout) => workout.date == date)
            .sort((a, b) => a.sort - b.sort)
            .map(renderWorkout)}
        </div>
      </div>
    </div>
  );
}

export default Day;
