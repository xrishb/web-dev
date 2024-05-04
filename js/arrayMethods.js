let colors = ['red', 'blue', 'pink'];

// traverse the array
for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
console.log('color array is type of : ' +typeof(colors));

// convert object to string
colors = colors.toString();
console.log('updated type of color array is : ' +typeof(colors));

// to combine two string arrays we can use .concat() method
let names = ['john', 'roman', 'cisca'];
names = names.toString();

colors = colors.concat(names);

console.log('color array after join(): ' +colors);

// Push 'raman' to the end of the array
colors += ', raman';

// Add 'geeta' and 'swayam' to the beginning of the array
colors = 'geeta, swayam, ' + colors;

// Pop 'raman' from the end of the array
colors = colors.replace(/, raman$/, '');

// Remove first element from the array
colors = colors.replace(/^geeta, swayam, /, '');

console.log(colors);
