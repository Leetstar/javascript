//#Given a file with a paragraph of text, count how many times the word "Node" appears and write the count into another file.
const fs = require('fs');
fs.writeFileSync('Paragraph.txt','Node is a powerful runtime. Node allows JavaScript to run outside the browser. Many developers love using Node for backend development.');
const data = fs.readFileSync('paragraph.txt', 'utf-8');
const words = data.split(/\s+/); 
let count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'Node') {
    count++;
  }
}
fs.writeFileSync('node_count.txt', `The word "Node" appears ${count} times.`);
console.log(`the word nord appears:${count} times`);
