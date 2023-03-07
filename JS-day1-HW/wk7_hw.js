//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, names) {
    let foundMatch = false;
    for (let i = 0; i < names.length; i++) {
        let regex = new RegExp(names[i], 'i');
        if (regex.test(str)) {
            console.log(`Matched ${names[i]}`);
            foundMatch = true;
        }
    }if (!foundMatch) {
    console.log("No Matches");
}
}

// Call function with parameters
findWords(dog_string, dog_names);
//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
    arr.splice(i, 1, "even index");
    }
}
    
replaceEvens(arr);
console.log(arr)

//Highest and Lowest

function highAndLow(numbers) {
    let numList = numbers.split(" ").map(Number);
    let highest = Math.max(...numList);
    let lowest = Math.min(...numList);
    return `${highest} ${lowest}`;
}
    
let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
let result = highAndLow(numbers);
console.log(result);

//Century From Year

function century(year) {
    if (year % 100 === 0) {
        return year / 100;
    } else {
        return Math.floor(year / 100) + 1;
    }
}
    
console.log(century(1750));
console.log(century(2001)); 
console.log(century(2000)); 