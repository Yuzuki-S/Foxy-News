const singlemeeting = (state = [], action) => {
  switch (action.type) {
    case "SINGLE_MEETING_RES":
      return action.meeting;

    case "SINGLE_MEETING_REQ":
      return [
        // {
        //   isFetching: true,
        //   isAuthenticated: false,
        //   errorMessage: ""
        // }
      ];
    default:
      return state;
  }
};
export default singlemeeting;
