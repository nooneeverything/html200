let chores = ['vacuum','dust','wash car','fold clothes','groceries'];
console.log(chores);

chores.push('mow lawn');
console.log(chores);


chores.splice(2,1);
console.log(chores);

let choresList = chores.join(', ');
console.log(choresList);
