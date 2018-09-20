
API documentation: currently seeking feedback! Talk to Lianna or Emil if anything urgent is missing

# Request and response formats

## POST /api/auth/register
### Request
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

## POST /api/auth/login
### Request
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

## GET /api/meetings
### Response:
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

## POST /api/meetings
### Request:
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


### Response:
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


## GET /api/meetings/:id/users
### Response:
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

## GET /api/users
### Response:
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