/**
 * Object Destructuring
 */
const person = {
    name: 'Manny',
    age: '31',
    location: {
        city: 'Hamburg',
        temp: 88
    }
};

/**
 * this expression is equivalent to the following two statements:
 * const name = person.name;
 * const age = person.age;
 * 
 * which is called 'Object Destructuring'
 */
const {name, age} = person;

console.log(`${name} is ${age}.`);

/**
 * rename 'temp' to be 'temperature' after destructuring
 */
const {city, temp: temperature} = person.location;
if(city && temperature) {
    console.log(`It's ${temperature} degree in ${city}.`);
}

//--------------------------------------------------

/**
 * Array Destructuring
 */

 const address = ['1299 S Juniper Street', 'Altona', 'Hamburg', '19157'];
 const [street, city_part, state, zip, country] = address;
 console.log(`You are in ${street} of the city ${city_part} ${country}.`);