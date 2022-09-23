import { useContext } from "react";
import styles from "./Exercise.module.css";
import CalendarContext from "../../../application/context";
import {
  handleDragExerciseStart,
  handleDropExerciseChangeSort,
} from "../../../infrastructure/dragDropExercise";

function Exercise(props) {
  const { exercises, dispatch } = useContext(CalendarContext);
  const { name, sets, information } = props;

  const handleDragStart = (e) => {
    handleDragExerciseStart(e, props);
  };

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    handleDropExerciseChangeSort(e, exercises, props, dispatch);
  }

  return (
    <div
      className={styles.exercise}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className={styles.name}>{name}</div>
      <div className={styles.boxInformation}>
        <div className={styles.sets}>{sets}</div>
        <div className={styles.information}>{information}</div>
      </div>
    </div>
  );
}

export default Exercise;
