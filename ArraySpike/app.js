// Make a morse code table using array data structure
var morseCodeTableArray = [{
    letter: 'a', 
    code : ['1', '0', '0', '1']
},{
    letter: 'b',
    code:  ['0', '0', '1', '1']
},{
    letter: 'c',
    code: ['0', '1', '0', '1']
},{
    letter: 'd',
    code: ['1', '1', '1', '0']
},{
    letter: 'e',
    code: ['1', '1', '1', '1']
}];

// Generate a random four digits binary number
function random_number(){
    var random = []
    for (i = 0; i < 4; i++){
        var number = Math.floor(Math.random()*2)
        number = number.toString()
        random.push(number)
    };
    return random
}

// Check a given input with the morse code table to check if there is a match
function check_letter(input){
    for (l = 0; l < len; l++) {
        flag = false
        j = 0;
        while (flag == false & j < 4){
            if (input[j] == morseCodeTableArray[l]["code"][j]){
                flag  = false
            }
            else{
                flag = true
            }
            j++
        }
        if (flag == false){
            return morseCodeTableArray[l]["letter"];
        }  
    }
    return null
}

// Generate a list of random four digits numbers.
random_list = []
for (a = 0; a < 50000; a++){
    a_number = random_number()
    random_list.push(a_number)
}

// MAIN FUNCTION
var input
var output
var size = random_list.length
var len = morseCodeTableArray.length
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
