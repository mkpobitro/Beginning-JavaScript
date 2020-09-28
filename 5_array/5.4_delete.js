var males = ["Shamim","karim","Rahima","Rahim"];
var females = ["Shamima","Karima"];

// var lastPerson = males.pop();
// females.push(lastPerson);

var personToRemove = males[2];
females.push(personToRemove);

delete(males[2]);

console.log(males,"\n",females);
