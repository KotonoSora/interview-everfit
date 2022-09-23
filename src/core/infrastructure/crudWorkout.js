export function addNewWorkout(workouts, props, dispatch) {
  const { date, sort } = props;
  // logic create new workout in a day
  let newId = workouts.length + 1;
  let newWorkouts = [...workouts];
  newWorkouts.push({
    ...props,
    id: newId,
    name: "x day - " + newId,
    sort: sort + 1,
  });
  newWorkouts.filter((w) => w.date == date).map((w, idx) => (w.sort = idx + 1));

  dispatch({
    type: "add_new_workout",
    payload: newWorkouts,
  });
}
