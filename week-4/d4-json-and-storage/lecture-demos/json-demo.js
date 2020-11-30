

// JSON DEMO


let array = [1, 'hello, "world"', 3.14, { id: 17 }];
let jsonArray = JSON.stringify(array);
console.log(jsonArray); // '[1, "hello, \"world\"", 3.14, {"id":17}]'

// CANNOT DO
// jsonArray.forEach(el => console.log(el)) 


// let jsonArray = '[1, "hello, \\"world\\"", 3.14, { \"id\": 17 }]';
let deserializedArray = JSON.parse(jsonArray);
console.log(deserializedArray);


// CAN DO 
deserializedArray.forEach(el => console.log(el)) 






// main difference between objects in JS vs JSON is that keys in JSON
// must be surrounded by escaped quotation marks

// let object = { name: "alissa", age: 15 };
// let json = JSON.stringify(object);
// console.log(json); // "{ \"name\": \"alissa\", \"age\": 15 }"


// let json = "{ \"name\": \"alissa\", \"age\": 15 }"
// let object = JSON.parse(json);
// console.log(object); // { name: 'alissa', age: 15 }

