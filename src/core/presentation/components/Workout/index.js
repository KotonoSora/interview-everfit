import { useContext } from "react";

import styles from "./Workout.module.css";
import Exercise from "../Exercise";
import CalendarContext from "../../../application/context";
import {
  handleDragWorkoutStart,
  handleDropWorkoutChangeSort,
} from "../../../infrastructure/dragDropWorkout";
import { addNewExercise } from "../../../infrastructure/crudExercise";
import { addNewWorkout } from "../../../infrastructure/crudWorkout";

function Workout(props) {
  const { workouts, exercises, dispatch } = useContext(CalendarContext);
  const { id, name } = props;

  function popupShowMore() {
    addNewWorkout(workouts, props, dispatch);
  }

  function handleAddExercise() {
    addNewExercise(exercises, props, dispatch);
  }

  function renderExercises(exercise) {
    return <Exercise {...exercise} key={`exercise_${exercise.id}`} />;
  }

  const handleDragStart = (e) => {
    handleDragWorkoutStart(e, props);
  };

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    handleDropWorkoutChangeSort(e, workouts, props, dispatch);
  }

  return (
    <div
      className={styles.workout}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className={styles.boxName}>
        <div className={styles.name}>{name}</div>
        <button className={styles.btnIconMore} onClick={popupShowMore}>
          <img src="assets/icon/more_horiz.svg" alt="more_horiz" />
        </button>
      </div>
      <div className={styles.boxExercises}>
        {exercises
          .filter((exercises) => exercises.workout_id == id)
          .sort((a, b) => a.sort - b.sort)
          .map(renderExercises)}
      </div>
      <div className={styles.boxAddExercise}>
        <button className={styles.btnAddExercise} onClick={handleAddExercise}>
          <img src="assets/icon/add_circle.svg" alt="add_circle" />
        </button>
      </div>
    </div>
  );
}

export default Workout;
