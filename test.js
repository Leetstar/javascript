
const fs = require('fs');

fs.writeFileSync('name.txt', 'Amal Sabu');
const data=fs.readFileSync('name.txt','utf-8');
console.log("File content:",data);
fs.appendFileSync('name.txt','\nage:19');
const updatedContent = fs.readFileSync('name.txt', 'utf8');
console.log('Updated file content:\n' + updatedContent);
fs.unlinkSync('name.txt');
console.log('File deleted!');
const folderPath = "D:/Users";
if (fs.existsSync(folderPath)) {
  console.log('Folder exists');
} else {
  console.log('Folder does NOT exist');
}
fs.writeFileSync('Users/hello.txt', 'File inside folder!');
console.log('Written inside folder')
const files = fs.readdirSync('Users');
console.log('Files inside:', files);




