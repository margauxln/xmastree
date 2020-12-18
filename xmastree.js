const prompt= require("prompt-sync")();
n= prompt("Longueur du sapin? ");

let space=[];
let star=[];

function sapin(n){
for (let i=0;i<n;i++){
    space.push(" ");
}
console.log(space.join("")+" +");
console.log(space.join("")+"/*\\");

for (let j=0;j<n;j++){
    space.pop();
    star.push("**");
    console.log(space.join("")+"/*"+star.join("")+"\\");
}
}
sapin(n);
