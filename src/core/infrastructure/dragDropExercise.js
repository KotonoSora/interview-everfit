export function handleDragExerciseStart(e, props) {
  const { id, sort } = props;
  // logic drag start exercise
  e.dataTransfer.setData("exercise_action", "change_sort_exercise");
  e.dataTransfer.setData("exercise_id", id);
  e.dataTransfer.setData("exercise_sort", sort);
}

function reSortList(it, workout_id, to_sort, from_sort, from_id) {
  if (it.workout_id == workout_id) {
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

export function handleDropExerciseChangeSort(e, exercises, props, dispatch) {
  const { workout_id, sort } = props;
  // logic drop exercise for change sort
  const exercise_action = e.dataTransfer.getData("exercise_action");
  const exercise_id = e.dataTransfer.getData("exercise_id");
  const drag_workout_id = e.dataTransfer.getData("workout_id");
  const exercise_sort = e.dataTransfer.getData("exercise_sort");

  if (
    exercise_action != "change_sort_exercise" ||
    drag_workout_id != workout_id
  )
    return;

  // change position exercise in list
  const newExercises = exercises.map((e) =>
    reSortList(e, drag_workout_id, sort, exercise_sort, exercise_id)
  );
  dispatch({
    type: "change_sort_exercise",
    payload: newExercises,
  });
  // clear data transfer
  e.dataTransfer.clearData();
}
