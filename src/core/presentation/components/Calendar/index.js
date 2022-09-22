import Week from "../Week";
import styles from './Calendar.module.css';

function Calendar() {
  return (
    <div className={styles.calendar}>
      <Week />
    </div>
  );
};

export default Calendar;