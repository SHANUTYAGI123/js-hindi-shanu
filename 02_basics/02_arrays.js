const marvels=["thor", "ironman", "spiderman"]
const dc=["superman", "flash", "batman"]

// marvels.push(dc)
// console.log(marvels);
// console.log(marvels[3][1]);

const heros=marvels.concat(dc)
// console.log(heros);

const new_heros=[...marvels, ...dc]
// console.log(new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const  real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shanu tyagi"));
console.log(Array.from("Shanu tyagi"));
console.log(Array.from({name:"Shanu tyagi"})); // interesting case from the POV of interview


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));