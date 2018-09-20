API documentation: currently seeking feedback! Talk to Lianna or Emil if anything urgent is missing

# Request and response formats

## GET /api/meetings
### Response:
<!-- An Array of Meetings -->
```sh
[
  {
    "id" : 1,
    "meetingName" : "This meeting's name",
    "attendeesList" : [
      {
        "userId" : 1234,
        "userName" : "Emil",
        "personCostPerHour" : 100.00,
      }
    ],
    "dateAndTimeOfMeeting": "date and time",
    "meetingCostPerHour" : 250.00,
    "totalMeetingTimeSeconds" : 360,
    "totalCostOfMeeting" : 6000.00
  }
]
```

## POST /api/meetings
### Request:
<!-- Usage: Save a completed meeting -->
```sh
{
  "meeting_name" : "This meeting's name",
  "attendees_list" : [
    {
      "user_id" : 1234,
      "user_name" : "Emil",
      "person_cost_per_hour" : 100.00,
    }
  ],
  "date_and_time_of_meeting" : "date and time",
  "meeting_cost_per_hour" : 250.00,
  "total_meeting_time_seconds" : 360,
  "total_cost_of_meeting" : 6000.00
}
```

### Response:
  <!-- The Meeting that has been saved in db read format -->
  <!-- where ID matches: -->
```sh
{
  "id" : 3000,
  "meetingName" : "This meeting's name",
  "attendeesList" : [
    {
      "useId" : 1234,
      "userName" : "Emil",
      "personCostPerHour" : 100.00,
    }
  ],
  "dateAndTimeOfMeeting": "date and time",
  "meetingCostPerHour" : 250.00,
  "totalMeetingTimeSeconds" : 360,
  "totalCostOfMeeting" : 6000.00
}
```


## GET /api/meetings/:id/users
### Response:
<!-- Get the attendees of a Meeting	 -->
<!-- An Array of User objects -->
<!-- Where meeting ID matches in join table -->
```sh
[
  {
    "id" : 1234,  <!-- user id -->
    "userName" : "Emil",
    "personCostPerHour" : 100.00,
  },
  {
    "id" : 0987,  <!-- user id -->
    "userName" : "Lianna",
    "personCostPerHour" : 200.00,
  },

]
```

## GET /api/users
### Response:
<!-- Get the users of the app -->
<!-- An Array of User Objects -->
```sh
[
  {
    "id" : 1234,  <!-- user id -->
    "userName" : "Emil",
    "personCostPerHour" : 100.00,
  },
  {
    "id" : 0987,  <!-- user id -->
    "userName" : "Lianna",
    "personCostPerHour" : 200.00,
  },

]
```