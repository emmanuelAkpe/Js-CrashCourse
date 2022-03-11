let a   = 10;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// urinary operators

console.log(a++);
console.log(a);
console.log(++a);
console.log(--a);
console.log(a--);

console.log(a <b);
console.log(a ==b);
console.log(a >b);


// control flow
let score =0;

if (score>=80) {
    console.log("you had A");
} else if(score>=75) {
    console.log("you had B+");
    
}else if(score>=65){
    console.log("you had C");
}
else if(score>=55){
    console.log("you had D+");
}
else if(score>=50){
    console.log("you had D");
}
else if (score>=45){
    console.log("you had F");
}
else{
    console.log("You had F");
}

const gender = "yoko"
switch (gender) {
    case "male":
        console.log("go to the male wash room");
        
        break;
    case "female":
        console.log("go to the female wash room");
            
        break;
    default:
        console.log("sorry, you cant be here");
        break;
}



for(let count=1; count<10;count++){
    console.log(count)
}


let i=1;

while (i<50) {
    console.log(i++)
}