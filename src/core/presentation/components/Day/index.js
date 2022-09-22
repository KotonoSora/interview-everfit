import styles from './Day.module.css';

function Day(props) {
  const {date, weekday, isToday = false} = props;
  return (
    <div className={styles.day}>
      <div className={styles.weekday}>{weekday}</div>
      <div className={styles.box}>
        <div className={[styles.date, isToday && styles.today].join(' ')}>{date}</div>
        <div className="zone-drap"></div>
      </div>
    </div>
  );
};

export default Day;