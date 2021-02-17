# Age of Empires and Spotify local API
### This is a local API using `http` methods `GET` and `POST`

 This documentation will help understand the way this local API is working and connecting to the API's used here.


This is a **REST** local API. Using `http` methods such as `GET` and `POST`


***

The base URL is: <localhost:666/>

***

### `GET` requests will return responses in `json`


### Civilizations
*Get a list of all the Age of Empires 2 civilizations*
  
http://localhost:666/civi

*Response*
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
*Get a certain civilization based on ID*

http://localhost:666/whatciv/{id}

ID required as integer

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

http://localhost:666/units

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

http://localhost:666/whatunit/{id}

ID required as integer

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

http://localhost:666/tech

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