import React from 'react';
import './App.css';

let name: string | number = "test";
let age: number = 1;
let isStudent: boolean = true;
let hobbies: string[] = [];
let role : [number, string];

function displayName(name: string) {
  console.log(name);
}

displayName(name);

type Person = {
  name: string;
  age: number;
};

interface Guy extends Person {
    profession: string;
}

let randomperson: Guy = {
    profession: "tradie",
    name: "Steve",
    age: 29
}

type Student = Person & {
  subject: string;
}

let justin: Student = {
  name: "justin",
  age: 21,
  subject: "compsci"
}



function App() {
  return (
    <div className="App">
      <p>Hello world</p>
    </div>
  );
}

export default App;
