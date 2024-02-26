// Take a random person from the person list
function takeRandomPersonFromList() {
    var personList = ["yo", "tu", "el", "ella", "usted", "nosotros", "ellos", "ellas", "ustedes"];
    var randomIndex = Math.floor(Math.random() * personList.length);
    return personList[randomIndex];
}

// Conguate a regular verb based on the person provided
function conjugateRegularVerbs(person, verb) {

    function changeRegularVerbsEnding(verb, ending, irEnding, otherEnding) {
        if (ending === "ir") {
            return verb.slice(0, -2) + irEnding;
        } else {
            return verb.slice(0, -1) + otherEnding;
        }
    }

    const ending = verb.slice(-2);
    if (person === "yo") {
        return verb.slice(0, -2) + "o";
    } else if (person === "tu") {
        return changeRegularVerbsEnding(verb, ending, "es", "");
    } else if (["el", "ella", "usted"].includes(person)) {
        return changeRegularVerbsEnding(verb, ending, "e", "");
    } else if (person === "nosotros") {
        return changeRegularVerbsEnding(verb, ending, "imos", "mos");
    } else if (["ellos", "ellas", "ustedes"].includes(person)) {
        return changeRegularVerbsEnding(verb, ending, "en", "n");
    } else {
        return "";
    }
}

// Control user input
function controlUserInput(answer, userInput) {
    if (answer === userInput) {
        return true;
    } 
    else {
        return false;
    }
}

// Access JSON data passed from the view
var jsonData = JSON.parse(jsonData);

// Take a random person from the person list
var person = takeRandomPersonFromList();
var personElement = document.getElementById("person");
personElement.textContent = person;

// Get the text box element
var userInput = document.getElementById("userInput");
userInput.addEventListener("keypress", function(event) {
// Check if the key pressed is Enter
    if (event.key === "Enter") {
        // Get user input
        var userInputText = userInput.value;

        // Give the right answer
        var verbElement = document.getElementById("verb");
        var verb = verbElement.textContent;
        var conjugatedVerb = conjugateRegularVerbs(person, verb);
        var answer = person + " " + conjugatedVerb;

        // Check if user input is correct
        correctAnswer = controlUserInput(answer, userInputText);

        // If correct input, set person and verb to a new value
        if (!correctAnswer) {
            person = takeRandomPersonFromList();
            personElement.textContent = person;
            
            // Retrieve the first key in the json file to change the verb
            var jsonKeys = Object.keys(jsonData);
            if (jsonKeys.length > 0) {
                var firstKey = jsonKeys[0];
                verb = firstKey;
                verbElement.textContent = verb;
                delete jsonData[firstKey];
            }
            else {
                
            }
        }
        // If not correct input
        else {

        }
    }
});