const fs = require('fs');

fs.unlink('./address.db', (err) => {
  if (err) throw err;
});