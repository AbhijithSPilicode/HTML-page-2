// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
var Kalvian1="Yuvaraj";
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is",Kalvian1)
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
var Kalvian2="Sachin"
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is",Kalvian2)
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(Kalvian1.length>Kalvian2.length){
console.log("The driver has the longest name, it has",Kalvian1.length,"characters.");
}else if(Kalvian1.length<Kalvian2.length){
console.log("It seems that the navigator has the longest name, it has",Kalvian2.length,"characters.");    
}else{
    console.log(" Wow, you both have equally long names",Kalvian1.length, "characters!.")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
function checkVowels(inputString) {
    const vowels = "aeiouAEIOU";
    const foundVowels = [];

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (vowels.includes(char)) {
            foundVowels.push({ vowel: char, index: i  });
        }
    }

    if (foundVowels.length > 0) {
        const result = foundVowels.map(({ vowel, index }) => `${vowel} ${index}`).join(" ");
        console.log(`${result}`);
    } else {
        console.log("No vowels in the string.");
    }
}

const inputString = "Kalvian";
checkVowels(inputString);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function countUpperCaseLowerCase(str) {
    let upperCaseCount = 0;
    let lowerCaseCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            upperCaseCount++;
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            lowerCaseCount++;
        }
    }

    console.log("Number of uppercase characters: " + upperCaseCount);
    console.log("Number of lowercase characters: " + lowerCaseCount);
}

let inputString2 = "ACEFbdzaw";
countUpperCaseLowerCase(inputString2);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
function printNameInUpperCase(name) {
    // Convert the name to uppercase
    let upperCaseName = name.toUpperCase();

    // Iterate through each character and print with a space
    for (let i = 0; i < upperCaseName.length; i++) {
        process.stdout.write(upperCaseName[i] + ' ');
    }

    // Move to the next line
    console.log();
}

let inputName = Kalvian1;
printNameInUpperCase(inputName);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
function printReverse(name) {
    let a=name.split('').reverse().join('');
    console.log(a)
  }
  printReverse(Kalvian2);
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
mergedname=Kalvian1+ " "+Kalvian2
console.log(mergedname)
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
mergedname2=Kalvian2+ " "+Kalvian1
console.log(mergedname2)
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
// Example names
const driverName = Kalvian1;
const navigatorName = Kalvian2;

// Compare lexicographic order
const comparisonResult = driverName.localeCompare(navigatorName);

// Print messages based on the comparison result
if (comparisonResult < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
const loremIpsumText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et justo nec odio convallis vulputate vel non ex. Suspendisse potenti. Nulla facilisi. Etiam aliquet, eros nec cursus auctor, justo augue volutpat odio, et bibendum velit lacus a est. Suspendisse potenti. Sed at tincidunt velit. Etiam ultrices eros vel varius facilisis. Quisque vel sodales urna. Etiam vitae metus in est dapibus fermentum.
Pellentesque a libero vitae risus blandit vehicula nec eu lacus. Nunc vel nunc sit amet purus tincidunt vulputate. Maecenas tincidunt justo nec est consectetur, sit amet bibendum orci volutpat. Sed vehicula vel augue sit amet auctor. Etiam feugiat ligula et purus dapibus, id vehicula tortor fermentum. Vestibulum sit amet est in velit dapibus euismod. Fusce id varius lectus. Etiam at ultricies tellus. Sed vulputate sem sit amet magna suscipit, nec ullamcorper dui volutpat.
Morbi et justo vel mi luctus dapibus. Sed vel laoreet eros. Ut ut risus non massa cursus ultrices. Vivamus et pharetra libero. Nam ac nisi vel velit feugiat cursus. Vivamus eu augue eget ipsum efficitur aliquam eu sit amet dui. Nunc hendrerit scelerisque lacus, eu suscipit justo. Integer at leo nec lectus ultricies varius. Aliquam erat volutpat. Etiam auctor euismod velit vel finibus. Etiam condimentum ante sed arcu convallis, vitae posuere risus semper.
`;

// Count the number of words
const wordCount = loremIpsumText.split(/\s+/).length;

// Count the occurrences of the Latin word "et"
const etCount = (loremIpsumText.match(/\bet\b/gi) || []).length;

// Print the results
console.log(`Number of words: ${wordCount}`);
console.log(`Number of occurrences of "et": ${etCount}`);
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
const phraseToCheck = "A man, a plan, a canal, Panama";

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the original string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Check if the phrase is a palindrome
if (isPalindrome(phraseToCheck)) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}