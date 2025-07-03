const fs = require('fs');
const cmdInput = process.argv.slice(2);

const needle = require('needle');
needle.get(cmdInput[0], (error, response, body) => {
  if (error) {
    throw error
  }
  if(response.statusCode > 200) {
    console.log(response)
  }
  const fileInBytes = body.length;

  fs.writeFile(cmdInput[1], body, () => {
    console.log(`Downloaded and saved ${fileInBytes} bytes to ${cmdInput[1]}`)
  })
});

