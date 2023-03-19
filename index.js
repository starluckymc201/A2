let person = {
    name: 'Trung',
    age: 21,
    description: "Hello Everone"
}

let computer = {
    CPU: 'intel coire i9',
    ram: '16gb',
    rom: '512gb',
    GPU: 'RTX 3060',
}

let array = ['hello', 'i\'m', 'trung', 'nice', 'to', 'meet', 'you'];
array.pop('you');
console.log(array);

console.log(`person: ${person.name}`, `\ncomputer: ${computer.GPU}`);

delete computer.GPU;

console.log(`person: ${person.name}`, `\ncomputer: ${computer.GPU}`);

console.log(`${array}`);

let weight = 50;
let height = 1.72;

let bmi = weight / (height * height);
console.log(bmi);

if(bmi < 18.5){
    console.log('Underweight');
}else if(bmi >= 18.5 && bmi <= 24.9){
    console.log('Healthy Weight');
}else if(bmi >= 25 && bmi <= 29.9){
    console.log('Overweight');
}else{
    console.log('Obesity'); 
}

