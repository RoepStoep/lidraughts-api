const fetch = require('node-fetch');

/* Create your personal token on https://lidraughts.org/account/oauth/token */
const personalToken = '';

fetch('https://lidraughts.org/api/account', {
    headers: {
      'Authorization': 'Bearer ' + personalToken
    }
  })
  .then(res => res.json())
  .then(console.log);
