let person1 = { name: "Alice", age: 25 };
let person2={...person1,favoriteColor: "pink"};
console.log(person1);
console.log(person2);

//What are the primitive types in JS ? give example of each
/*String let name="John"
Number let count=10
Bigint let bigNumber=123456789012345678901
Boolean let bool=true
Undefined let age;
Null let name=null;
Symbol let sym=Symbol("id");


When should you use an object ?
When we need to store data with key-value pairs. Objects are great for representing complex entities with multiple attributes.

When should you use an  array ?
When we need to store a list of items.Arrays are ideal for collections of similar items.

Declare a function that takes two arguments, (name and favorite hobby) and console on the screen My name is {name} and my favorite color is {favorite color}function*/

function info(name, favoriteColor) {
  console.log(`My name is ${name} and my favorite color is ${favoriteColor}`);
}
info("Vaishnavi","Pink");