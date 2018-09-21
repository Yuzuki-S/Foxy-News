Product Owner: Maintain the readme as the agreed requirements of the project.  If these requirements change, make the change in the readme and then notify affected teams.
Architecture Team: Maintain the documentation of the readme with respect to the APIs.  Routes, payloads and behaviours.  This is the agreement on how data will flow in the app.
Backend Team: Build the APIs as per the readme and test them with Postman
Frontend Team: Build the wireframes in conjunction with the product owner and then build the interface
Timekeeper: Schedules and calls standups (can be done by the product owner)

Notes:
- Push to your branch, pull request to Dev.
- Pull requests for all features and have them reviewed by Engie, Kelly or Ross.


## Team Roles

### Team learning objectives:
* Yuzuki ()
* Leslie (Git trees)
* Luke ()
* Robbie (Product Owner)
* Bella ()
* Lianna (deployment)
* Ben ()
* Dani (database)
* Lexi (React / Redux)


### Back End
* Lianna
* Luke 
* Bella
* Dani?
* Lexi

### Front End
* Yuzuki
* Leslie
* Emil
* Ben
* Dani?

### Architecture (api docs)
* Front end: Emil
* Back end: Lianna (later: Luke, Bella)

### Product Owner & Timekeeper
Initial:
* Robbie


# Meeting Notes

## Frontend team
Tasks:
* build components
* landing page
* log in
* Redux (after components)

other:
* use semantic styling
* using Bulma


## Backend Team
Tasks: 
* APIs
* Database
* Routes

Right now:
* Lianna work with Emil for API docs
* Dani, Lexi: Begin APIs
* Bella, Luke: begin database

## Priorities
Evening:

Fri AM:

Fri PM:


Notes:
client/components/HistoricMeeting.jsx
    this.state = {};
  }
   componentDidMount() {}
  @kelly-keating
kelly-keating 2 hours ago
You don't need to change this necessarily, but a note that you don't seem to need didMount or this.state here



server/db/meetings.js
function getAttendeesByMeeting(meeting_id) {
  return db("attendees")
    .where("meeting_id", meeting_id)
    .then(entries => {

server/db/meetings.js
  return db("meetings")
    .where("id", meeting_id)
    .first()
    .then(meetingData => {

server/db/meetings.js
    attendees: meeting.attendees.length,
    cost: meeting.totalCostOfMeeting
  })
  .then(id => {

server/db/users.js
    .first()
    .then(userInfo => {

  @kelly-keating
kelly-keating 2 hours ago
This .then statement should be where getAttendeesByMeeting is called rather than in the db function


- remember to remove all console logs before merging with master (unless they serve a functional purpose)
