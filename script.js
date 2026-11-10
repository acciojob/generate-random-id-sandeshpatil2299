function makeid(l) {
  // write your code here
	let alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let result = "";

for (let i = 0; i < 5; i++) {
    result += alphas[parseInt(Math.random() * alphas.length)];
}

return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
