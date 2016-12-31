# Skunkwork
Ultra simple stub server that returns JSON data

# Huh?
Skunkwork is a NodeJS server that creates a REST-like API based on provided JSON file.

# Usage
```javascript
let skunkwork = require('skunkwork')

// starts server
skunkwork.start('path/to.json')

// stop server
skunkwork.stop()
```