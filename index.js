// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.


function titleCase(str) {
  let arr = str.split(" ");
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    results.push(x);
  }
  console.log(results.join(" "));
}

titleCase("I'm a little tea pot");

// reverse
let array=[2,1,6,4,-7];
let reverseArray=[];
for(var i = array.length - 1; i >= 0; i--) {
  reverseArray.push(array[i])
}
console.log(reverseArray);