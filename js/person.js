'use strict';

const personDataLog = ({firstname = 'John', lastname = 'Doe', age = 33} = {}) => "My name is " + firstname + " " + lastname + ". I'm " + age + " years old.";

console.log(personDataLog({firstname: 'Jack', lastname: 'Daniel', age: 22}));