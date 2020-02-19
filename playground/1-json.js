const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'My';
user.age = 23;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
