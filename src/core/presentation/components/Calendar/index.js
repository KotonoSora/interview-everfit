import { useReducer } from "react";
import Week from "../Week";
import styles from "./Calendar.module.css";
import { datasReducer, initalDatas } from "../../../application/datasReducer";
import CalendarContext from "../../../application/context";

function Calendar() {
  const [datas, dispatch] = useReducer(datasReducer, initalDatas);

  const provider = {
    ...datas,
    dispatch,
  };

  return (
    <CalendarContext.Provider value={provider}>
      <div className={styles.calendar}>
        <Week />
      </div>
    </CalendarContext.Provider>
  );
}

export default Calendar;
