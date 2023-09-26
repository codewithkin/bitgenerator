const http = require("http");

const transform = (str) => {
  let bin = [];

  for(let i = 0; i < str.length; i++) {
    bin.push(str.codePointAt(i).toString(2))
  }

  return bin;
}

http.createServer((req, res) => {
  let data = '';

  req.on("data", chunk => {
    data += chunk;
  })

  req.on("end", () => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    res.end(`The string: ${data} in binary is: \n${transform(data)}\n`);
  })
}).listen(8000, "localhost", () => {
  console.log(`Server running on port 8000, \nwaiting for input`)
})
