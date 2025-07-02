//#Read a file that contains a list of names (one per line) and create a new file where the names are written in reverse order.
const fs = require('fs');

fs.writeFileSync('details.txt', '\nAmal Sabu\nRobin\nAbhijith');
const data=fs.readFileSync('details.txt','utf-8');
console.log('File Content:',data)
console.log("Length of File content:",data.length);
for (let i=data.length-1;i>=0;i--) {
  console.log(data.length[i]);
}



