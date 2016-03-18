mailgun-list-export
====================

Node.js module to export large mailing lists from Mailgun.

Returns a JSON object of every member of a given mailing list. Mailgun's API only returns a maximum of 100 at a time. 


## Installation
```
npm install mailgun-list-export
```

## Usage
```javascript
var mailgunListExport = require('mailgun-list-export');
mailgunListExport.fetchMembers(apiKey, listName, callback);
```
