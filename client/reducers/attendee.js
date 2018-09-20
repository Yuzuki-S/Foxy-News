const addAttendee = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log(action);
      return [...state, action];

    case "GET_MEETING":
      console.log("reducer");
      return [...state, action];

    default:
      return state;
  }
};

export default addAttendee;
