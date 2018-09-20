const addAttendee = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      //adding the whole action for now as an example - currently being worked on
      return [...state, action];

    default:
      return state;
  }
};

export default addAttendee;
