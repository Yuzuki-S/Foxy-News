# $how Me The Money

## - Refer to team.md for meeting notes and info -

# Week 7 Group Project

Meetings are expensive, but sometimes we forget how expensive they are and feel the need to talk for too long about topics that are unimportant for the meeting purpose.

This is an app to display the costs of meetings, and track the costs of your meetings over time.

The idea of the App is to be able to display the real-time cost of a meeting as it occurs.
This cost is calculated based on the hourly wages of the meeting's attendees and the current duration of the meeting.

The intended effect of this App is to make meeting attendees aware of how much this time is costing the business.


## User Stories

### MVP

As a user:
  * I want to register for the App under my name, and state my hourly wage
  * I want to start a new meeting, and add all the meeting members. (MVP: Add member names and wages manually)
  * I want to start my created meeting, and see a ($) cost tracker display the current meeting cost every second
  * I want to be able to save a meeting's cost, attendess, duration and date/time when it is finished for later viewing
  * I want to be able to view previous meetings in date/time order, and see more information about a past meeting.
  * I want to see a graph of meeting costs over time

### Stretch
  * I want to be able to select existing users of the App as meeting attendees, so that our wages don't have to be shown / inputted manually. If a meeting attendee doesn't have an account, I want to be able to manually add them to the App.
  * I want to set a Maximum Cost an Maximum Duration for my Meeting, and see colourised progress bar displaying both a these
  * I want to be able to state my yearly salary rather than hourly rate as an option on register
  * I want to be able to view all meetings that I am an attenee for, and I want information about my meetings to not be visible to all users of the app.
  * I want to create a group of regular attendees for my meeting group to make setting up my meeting easier.
  * I want to be able to write notes or summaries for meetings upon saving them.

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | CreateMeeting | View for user to arrange meeting attendees and information before starting the timer |
  | Meeting | View to display current meeting time, cost and other information while the meeting is in progress |
  | History | Display a list of past meetings the user has attended with select preview information |
  | PastMeeting | Display a single meeting from the history list, displaying more information and a list of attendees for the past meeting |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | currentMeeting | Track meeting progress such as current cost and current duration |
  | meetings | store the list of meetings the user has attended in the past |
  | users | store the list of users who can attend meetings |

 ## Actions

 ### meetings

 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_MEETINGS | meetings | retreive meetings from the db and store in redux |
 | ADD_MEETING | meeting | Add a single meeting to the history after it is created |

 ### users
 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_USERS | users | retreive the users from the server |

 ### currentMeeting
  | type | data | purpose |
| --- | --- | --- |
| START_MEETING | attendees ([]), meeting_name | a meeting has started, set initial meeting state |
| END_MEETING | null | Set meeting in progress flag to false |  
| TICK_ONE_SECOND | null | Increase running total by 1s worth of $ |
| RESET_MEETING | null | Revert to initial state |



## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/meetings | Yes | Get a Users Meeting Histroy | An Array of Meetings |
| Post | /api/meetings | Yes | Save a completed meeting | The Meeting that has been saved in db read format |
| Get | /api/meetings/:id/users | Yes | Get the attendees of a Meeting | An Array of User objects |
| Get | /api/users | Yes | Get the users of the app | An Array of User Objects |

* updates:
- new API/route created by Leslie. getAllMeetings function in DB Get request hits the server and returns an array of objects holding every meeting in history. (I may not have understood that correctly, check with Les if you need clarification)

## DB (Server Side)
  There should be three tables for MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | user_name | String |
  | first_name | String |
  | last_name | String |
  | hash | text |

### Meetings
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | meeting_name | String |
  | time | Timestamp |
  | attendees | integer |
  | cost | Decimal |

### Attendees (Join Table M2M)

  Many Users attend Many Meetings

 | Column Name | Data Type |
 | --- | --- |
 | user_id | Integer |
 | meeting_id | Integer |

 ---

## Setup

Run the following commands in your terminal:

```sh
yarn install
yarn knex migrate:latest
yarn knex seed:run
mv .env_example .env
```

To run in development:
```sh
yarn dev
 - or -
npm run dev

```

To run in production:
```sh
yarn start
  - or -
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
yarn h:deploy
  - or -
npm run h:deploy
```

Run heroku migrations:
```sh
yarn h:migrate
  - or -
npm run h:migrate
```

Run heroku seeds:
```sh
yarn h:seed
  - or -
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
yarn h:rollback
  - or -
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!


## API docs: Request and response formats

### POST /api/auth/register
#### Request
```sh
{
  [
    {
    "userName" : "memelord69",
    "firstName" : "Thing",
    "lastName" : "Trundell",
    "password" : "sosecret",
    "personCostPerHour" : 100
    }
  ]
}
```

### POST /api/auth/login
#### Request
```sh
{
  [
    {
    "userName" : "memelord69",
    "password" : "sosecret",
    }
  ]
}
```

### GET /api/meetings
#### Response:
<!-- An Array of Meetings -->
```sh
{
  [
    {
      "id" : 1,
      "meetingName" : "This meeting's name",
      "attendees" : [
        {
          "userId" : 1234,
        "userName" : "handle name",
        "firstName" : "Name",
        "lastName" : "Name",
          "personCostPerHour" : 100.00,
        }
      ],
      "time": timestamp
      "meetingCostPerHour" : 250.00,
      "totalMeetingTimeSeconds" : 360,
      "totalCostOfMeeting" : 6000.00
    }
  ]
}
```

### POST /api/meetings
#### Request:
<!-- Usage: Save a completed meeting -->
```sh
{
  "meetingName" : "This meeting's name",
  "attendees" : [
    {
      "userId" : 1234,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
    }
  ],
  "time" : "date and time",
  "meetingCostPerHour" : 250.00,
  "totalMeetingTimeSeconds" : 360,
  "totalCostOfMeeting" : 6000.00
}
```


#### Response:
  <!-- The Meeting that has been saved in db read format -->
  <!-- where ID matches: -->
```sh
{
  "id" : 3000,
  "meetingName" : "This meeting's name",
  "attendees" : [
    {
      "id" : 1234,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
  ],
  "time": timestamp
  "meetingCostPerHour" : 250.00,
  "totalMeetingTimeSeconds" : 360,
  "totalCostOfMeeting" : 6000.00
}
```


### GET /api/meetings/:id/users
####Response:
<!-- Get the attendees of a Meeting	 -->
<!-- An Array of User objects -->
<!-- Where meeting ID matches in join table -->
```sh
{
  [
    {
      "id" : 1234,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
    {
      "id" : 5678,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
  ]
}
```

### GET /api/users
#### Response:
<!-- Get the users of the app -->
<!-- An Array of User Objects -->
```sh
{
  [
    {
      "id" : 1234,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
    {
      "id" : 5678,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
  ]
}
```


## Team Tasks

Product Owner: Maintain the readme as the agreed requirements of the project.  If these requirements change, make the change in the readme and then notify affected teams.
Architecture Team: Maintain the documentation of the readme with respect to the APIs.  Routes, payloads and behaviours.  This is the agreement on how data will flow in the app.
Backend Team: Build the APIs as per the readme and test them with Postman
Frontend Team: Build the wireframes in conjunction with the product owner and then build the interface
Timekeeper: Schedules and calls standups (can be done by the product owner)

Notes: Create pull requests for all features and have them reviewed by Engie, Kelly or Ross.


## To Do
* Trello (Yuzuki)

## Team Roles
Team learning objectives:
* Yuzuki ()
* Leslie (Git trees)
* Luke ()
* Robbie ()
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

## Backend Team
Tasks: 
* APIs
* Database
* Routes

Right now:
* Lianna work with Emil for API docs
* Dani, Lexi: Begin APIs
* Bella, Luke: begin database

