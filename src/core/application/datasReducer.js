export function datasReducer(datas, action) {
  switch (action.type) {
    case "add_new_exercise":
      return {
        ...datas,
        type: action.type,
        exercises: [...datas.exercises, action.payload],
      };
    case "add_new_workout":
      return {
        ...datas,
        type: action.type,
        workouts: action.payload,
      };
    case "change_date_workout":
      return {
        ...datas,
        type: action.type,
        workouts: action.payload,
      };
    case "change_sort_workout":
      return {
        ...datas,
        type: action.type,
        workouts: action.payload,
      };
    case "change_sort_exercise":
      return {
        ...datas,
        type: action.type,
        exercises: action.payload,
      };
    default:
      throw Error("Unknow action: " + action.type);
  }
}

export const initalDatas = {
  type: "init",
  weekdays: [
    {
      weekday: "MON",
      date: "05",
    },
    {
      weekday: "TUE",
      date: "06",
    },
    {
      weekday: "wed",
      date: "07",
    },
    {
      weekday: "thu",
      date: "08",
    },
    {
      weekday: "fri",
      date: "09",
      isToday: true,
    },
    {
      weekday: "sat",
      date: "10",
    },
    {
      weekday: "sun",
      date: "11",
    },
  ],
  workouts: [
    {
      name: "Chest Day - with Arm exercises",
      date: "06",
      id: 1,
      sort: 1,
    },
    {
      name: "led day",
      date: "07",
      id: 2,
      sort: 1,
    },
    {
      name: "arm day",
      date: "07",
      id: 3,
      sort: 2,
    },
  ],
  exercises: [
    {
      name: "Bench Press Medium Grip",
      sets: "3x",
      information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
      workout_id: 1,
      id: 1,
      sort: 1,
    },
    {
      name: "Exercise C",
      sets: "1x",
      information: "30 lb x 6",
      workout_id: 2,
      id: 2,
      sort: 1,
    },
    {
      name: "Exercise D",
      sets: "1x",
      information: "40 lb x 6",
      workout_id: 2,
      id: 3,
      sort: 2,
    },
    {
      name: "Exercise E",
      sets: "1x",
      information: "50 lb x 6",
      workout_id: 2,
      id: 4,
      sort: 3,
    },
    {
      name: "Exercise F",
      sets: "1x",
      information: "60 lb x 6",
      workout_id: 3,
      id: 5,
      sort: 1,
    },
  ],
};
