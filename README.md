# Age of Empires and Spotify local API
### This is a local API using `http` methods `GET` and `POST`

 This documentation will help understand the way this local API is working and connecting to the API's used here.


This is a **REST** local API. Using `http` methods such as `GET` and `POST`. Retrieving info of third party API's with `axios`.

Third party API's used:

[Age of Empires 2 API](https://age-of-empires-2-api.herokuapp.com/docs/)

[Spotify API](https://developer.spotify.com/documentation/web-api/)

***

The base URL is: <localhost:8080/>

***

### `GET` requests will return responses in `json`
***

### Civilizations
*Get a list of all the Age of Empires 2 civilizations*
  
**Endpoint:** http://localhost:8080/civi

    GET /civi

*Response:*
~~~
{
  "civilizations": [
    {
      "id": 0,
      "name": "string",
      "expansion": "string",
      "army_type": "string",
      "unique_unit": [
        "string"
      ],
      "unique_tech": [
        "string"
      ],
      "team_bonus": "string",
      "civilization_bonus": [
        "string"
      ]
    }
  ]
}
~~~
---
### Specific civilization
*Get a specific civilization based on ID*

**Endpoint:** http://localhost:8080/whatciv/{id}

    GET /whatciv/{id}

Passing ID as a parameter

*Response*
~~~
{
  "id": 0,
  "name": "string",
  "expansion": "string",
  "army_type": "string",
  "unique_unit": [
    "string"
  ],
  "unique_tech": [
    "string"
  ],
  "team_bonus": "string",
  "civilization_bonus": [
    "string"
  ]
}
~~~
---
### Existing units
*Get a list of the existing units*

**Endpoint:** http://localhost:8080/units

    GET /units

*Response*
~~~
{
  "units": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "expansion": "string",
      "age": "string",
      "created_in": "string",
      "cost": {
        "Wood": 0,
        "Food": 0,
        "Stone": 0,
        "Gold": 0
      },
      "build_time": 0,
      "reload_time": 0,
      "attack_delay": 0,
      "movement_rate": 0,
      "line_of_sight": 0,
      "hit_points": 0,
      "range": "string",
      "attack": 0,
      "armor": "string",
      "attack_bonus": [
        "string"
      ],
      "armor_bonus": [
        "string"
      ],
      "search_radius": 0,
      "accuracy": "string",
      "blast_radius": 0
    }
  ]
}
~~~
---
### Specific unit 
*Get a specific unit based on ID*

**Endpoint:** http://localhost:8080/whatunit/{id}

    GET /whatunit/{id}

Passing ID as a parameter

*Response*
~~~
{
  "id": 0,
  "name": "string",
  "description": "string",
  "expansion": "string",
  "age": "string",
  "created_in": "string",
  "cost": {
    "Wood": 0,
    "Food": 0,
    "Stone": 0,
    "Gold": 0
  },
  "build_time": 0,
  "reload_time": 0,
  "attack_delay": 0,
  "movement_rate": 0,
  "line_of_sight": 0,
  "hit_points": 0,
  "range": "string",
  "attack": 0,
  "armor": "string",
  "attack_bonus": [
    "string"
  ],
  "armor_bonus": [
    "string"
  ],
  "search_radius": 0,
  "accuracy": "string",
  "blast_radius": 0
}
~~~
---
### Technologies
*Get a list of the existing technologies*

**Endpoint:** http://localhost:8080/tech

*Response*
~~~
{
  "technologies": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "expansion": "string",
      "age": "string",
      "develops_in": "string",
      "cost": {
        "Wood": 0,
        "Food": 0,
        "Stone": 0,
        "Gold": 0
      },
      "build_time": 0,
      "applies_to": [
        "string"
      ]
    }
  ]
}
~~~
---
---

### `POST` requests will return response in `json`confirming the task was completed
---
### Create a new playlist 

*Creates a new playlist in your spotify account*

**Endpoint:** http://localhost:8080/create/playlist/{user}

Passing user_id as a parameter

    POST /create/playlist/{user}

Headers:

- Requesting **authorization** header as OAuth Bearer token

- Application/json

- Accept

JSON Body:
~~~~
    {  
      "name": "playlist name",
      "description": "playlist description",
      "public": true/false
    }
~~~~

JSON response:

    Playlist created

---
### Add a track to a playlist

*Adds a track to a playlist*

**Endpoint:** http://localhost:8080/add/tracks

    POST /add/tracks

Headers:

- Requesting **authorization** header as OAuth Bearer token

- Application/json

- Accept

Parameters:

- Playlist ID

- Song ID ("uris" from spotify)

JSON Response:

    Track added correctly
---
### Skip to next song

*Skips to next song*

**Endpoint:** http://localhost:8080/next

    POST /next

Headers:

- Requesting authorization header as OAuth Bearer token

- Application/json

- Accept

JSON Response:

    Next song
---
### Skip to previous song

*Skips to previous song*

**Endpoint:** http://localhost:8080/prev

    POST /prev

Headers:

- Requesting authorization header as OAuth Bearer token

- Application/json

- Accept

JSON Response:

    Previous song
---
### Add items to queue

*Adds songs to the users queue*

**Endpoint:** http://localhost:8080/queue/{uri}

Headers:

- Requesting authorization header as OAuth Bearer token

- Application/json

- Accept

Parameters:

- Song ID ("uris" from spotify)

JSON Response:

    Track added to queue
---
