const meetings = (state = [], action) => {
  switch (action.type) {
    case "MEETING_REQ":
      return [...state];
    case "MEETING_RES":
      return [...state, action.meeting];
    default:
      return state;
  }
};

export default meetings;
