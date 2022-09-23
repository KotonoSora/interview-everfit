export function addNewExercise(exercises, props, dispatch) {
  const { id } = props;
  // logic create new exercise of a workout
  let newId = exercises.length + 1;
  const newExercise = {
    name: "Exercise X - " + newId,
    sets: "4x",
    information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
    workout_id: id,
    id: newId,
    sort: exercises.filter((e) => e.workout_id == id).length + 1,
  };

  dispatch({
    type: "add_new_exercise",
    payload: newExercise,
  });
}
