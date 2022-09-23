export function handleDragWorkoutStart(e, props) {
  const { id, date, sort } = props;
  // logic drag start exercise
  e.dataTransfer.setData("workout_action", "change_workout");
  e.dataTransfer.setData("workout_id", id);
  e.dataTransfer.setData("workout_sort", sort);
  e.dataTransfer.setData("workout_date", date);
}

export function handleDropWorkoutChangeDate(e, workouts, props, dispatch) {
  const { date } = props;
  // logic drop exercise for change date
  const exercise_action = e.dataTransfer.getData("exercise_action");
  const workout_action = e.dataTransfer.getData("workout_action");
  const workout_id = e.dataTransfer.getData("workout_id");
  const workout_date = e.dataTransfer.getData("workout_date");

  if (
    workout_action != "change_workout" ||
    exercise_action ||
    workout_date == date
  )
    return;

  // change date of workout
  const foundIndex = workouts.findIndex((w) => w.id == workout_id);
  let newWorkouts = [...workouts];
  newWorkouts[foundIndex].date = date;
  newWorkouts.filter((w) => w.date == date).map((w, idx) => (w.sort = idx + 1));
  dispatch({
    type: "change_date_workout",
    payload: newWorkouts,
  });
  // clear data transfer
  e.dataTransfer.clearData();
}

function reSortList(it, date, to_sort, from_sort, from_id) {
  if (it.date == date) {
    if (it.id == from_id) {
      it.sort = to_sort;
    } else if (
      to_sort > from_sort &&
      it.sort > from_sort &&
      it.sort <= to_sort
    ) {
      it.sort -= 1;
    } else if (
      to_sort < from_sort &&
      it.sort < from_sort &&
      it.sort >= to_sort
    ) {
      it.sort += 1;
    }
  }
  return it;
}

export function handleDropWorkoutChangeSort(e, workouts, props, dispatch) {
  const { date, sort } = props;
  // logic drop workout for change sort
  const exercise_action = e.dataTransfer.getData("exercise_action");
  const workout_action = e.dataTransfer.getData("workout_action");
  const workout_id = e.dataTransfer.getData("workout_id");
  const workout_sort = e.dataTransfer.getData("workout_sort");
  const workout_date = e.dataTransfer.getData("workout_date");

  if (
    workout_action != "change_workout" ||
    exercise_action ||
    workout_date != date
  )
    return;

  // change position in list of workout
  const newWorkouts = workouts.map((w) =>
    reSortList(w, workout_date, sort, workout_sort, workout_id)
  );
  dispatch({
    type: "change_sort_workout",
    payload: newWorkouts,
  });
  // clear data transfer
  e.dataTransfer.clearData();
}
