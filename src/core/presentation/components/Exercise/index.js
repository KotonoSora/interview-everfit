import styles from "./Exercise.module.css";

function Exercise(props) {
  const { name, sets, information } = props;
  return (
    <div className={styles.boxExercise}>
      <div className={styles.name}>{name}</div>
      <div className={styles.boxInformation}>
        <div className={styles.sets}>{sets}</div>
        <div className={styles.information}>{information}</div>
      </div>
    </div>
  );
}

export default Exercise;
