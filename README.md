# Skunkwork
Ultra simple stub server that returns JSON data

# Huh?
Skunkwork is a NodeJS server that creates a REST-like API based on provided JSON file.

# Usage
Install it globally:
`npm install skunkwork -g`

Then call it with a JSON file:
`skunk example.json`

Skunkwork defaults to port 9000, however you can also pass a different port if needed:
`skunk example.json 1337`

## How to Create Your JSON file
Make a JSON obect with each immediate child property named after the path you
wish to stub out. `/path` would be reachable at `locahost:9000/path`.

```JSON
{
  "/path": [
    {"id": 1},
    {"id": 2},
    {"id": 3}
  ],

  "/path/1": [
    {"id": 1}
  ]
}
```