const fs = require('fs');
fs.readFile('ip.mjs', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
