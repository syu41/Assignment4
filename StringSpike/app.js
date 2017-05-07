// Make a morse code table using string data structure
var morseCodeTableString = [{
    letter: 'a',
    code  : '1001'
}, {
    letter: 'b',
    code  : '0011'
}, {
    letter: 'c',
    code  : '0101'
}, {
    letter: 'd',
    code  : '1110'
}, {
    letter: 'e',
    code  : '1111'
}];

// Generate a random four digits binary number
function random_number(){
    var random = ''
    for (i = 0; i < 4; i++){
        var number = Math.floor(Math.random()*2)
        number = number.toString()
        random += number
    };
    return random
}

// Check a given input with the morse code table to check if there is a match
function check_letter(input){
    for (l = 0; l < len; l++) {
        if (input == morseCodeTableString[l].code) {
            return morseCodeTableString[l].letter;
        }
    }
    return null;
}

// Generate a list of random four digits numbers.
random_list = []
for (j = 0; j < 50000; j++){
    a_number = random_number()
    random_list.push(a_number)
}

// MAIN FUNCTION
var input
var output
var size = random_list.length
var len = morseCodeTableString.length
// record this time as the start time
var start_time = Date.now();
// loop through the whole random number list
for (k = 0; k < size; k++){
    input = random_list[k]
    output = check_letter(input)
    // print the output
    console.log(output)
}
// record this time as the end time
var end_time = Date.now();
// calculate the total time taken
var total_time = end_time - start_time;
console.log(total_time);
