import styles from "./Workout.module.css";
import Exercise from "../Exercise";

const mockExercises = [
  {
    name: "Bench Press Medium Grip",
    sets: "3x",
    information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
    workout_id: 1,
    id: 1,
  },
  {
    name: "Exercise C",
    sets: "1x",
    information: "30 lb x 6",
    workout_id: 2,
    id: 2,
  },
  {
    name: "Exercise D",
    sets: "1x",
    information: "40 lb x 6",
    workout_id: 2,
    id: 3,
  },
  {
    name: "Exercise E",
    sets: "1x",
    information: "50 lb x 6",
    workout_id: 2,
    id: 4,
  },
  {
    name: "Exercise F",
    sets: "1x",
    information: "60 lb x 6",
    workout_id: 3,
    id: 5,
  },
];

function Workout(props) {
  const { title, date, id } = props;

  function popupShowMore() {
    // TODO: show popup more
    console.log("show popup more");
  }

  function addNewExercise() {
    // TODO: action add new exercise
  }

  function renderExercises(exercise) {
    return (
      exercise.workout_id == id && (
        <Exercise {...exercise} key={`exercise_${exercise.id}`} />
      )
    );
  }

  return (
    <div className={styles.workout}>
      <div className={styles.boxTitle}>
        <div className={styles.title}>{title}</div>
        <button className={styles.btnIconMore} onClick={popupShowMore}>
          <img src="assets/icon/more_horiz.svg" alt="more_horiz" />
        </button>
      </div>
      <div className={styles.boxExercises}>
        {/* show exercises here */}
        {mockExercises.map(renderExercises)}
      </div>
      <div className={styles.boxAddExercise}>
        <button className={styles.btnAddExercise} onClick={addNewExercise}>
          <img src="assets/icon/add_circle.svg" alt="add_circle" />
        </button>
      </div>
    </div>
  );
}

export default Workout;
