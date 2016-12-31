# Skunkwork
Ultra simple stub server that returns JSON data

# Huh?
Skunkwork is a NodeJS server that creates a REST-like API based on prov"id"ed JSON file.

# Usage
```javascript
let skunkwork = require('skunkwork')

// starts server
skunkwork.start('path/to.json')

// stop server
skunkwork.stop()
```

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