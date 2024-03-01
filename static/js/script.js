// Take a random person from the person list
function takeRandomPersonFromList() {
    var personList = ["yo", "tu", "el", "ella", "usted", "nosotros", "ellos", "ellas", "ustedes"];
    var randomIndex = Math.floor(Math.random() * personList.length);
    return personList[randomIndex];
}

// Conguate a regular verb based on the person provided
function conjugateRegularVerbs(person, verb) {

    // Change verb ending based on the initial ending
    function changeRegularVerbsEnding(verb, ending, irEnding, otherEnding) {
        if (ending === "ir") {
            return verb.slice(0, -2) + irEnding;
        } else {
            return verb.slice(0, -1) + otherEnding;
        }
    }

    // The rules for changing spanish regular verbs
    const ending = verb.slice(-2);
    if (person === "yo") {
        return verb.slice(0, -2) + "o";
    } else if (person === "tu") {
        return changeRegularVerbsEnding(verb, ending, "es", "s");
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
function controlUserVerbConjugation(userInput) {

    // Give the right answer
    var conjugatedVerb = conjugateRegularVerbs(person, verb);
    var answer = person + " " + conjugatedVerb;

    if (answer === userInput) {
    
        // Provide user with positive feedback 
        feedback.style.backgroundColor = "green";
        feedback.textContent = "correct, next!";
        
        // Retrieve the first key in the json file to change the verb
        var jsonKeys = Object.keys(jsonData);
        if (jsonKeys.length > 0) {
            var firstKey = jsonKeys[0];
            verb = firstKey;
            next_translation = jsonData[firstKey];
            delete jsonData[firstKey];
        }
        else {
            // No verbs left
            feedback.style.backgroundColor = "yellow";
            feedback.textContent = "restart!";
        }

        // Get a random person from the person list
        person = takeRandomPersonFromList();

        // Update person and verb
        personVerbElement.textContent = person + " " + verb;

        // Hide person and verb to show translation instead
        personVerbElement.style.display = 'none';
        translationElement.style.display = 'block';
    } 
    else {
        feedback.style.backgroundColor = "red";
        feedback.textContent = "incorrect!";
    }
}

// Control user input
function controlUserTranslation(userInput){

    if (translation === userInput) {
        // Change to the next transatlion and delete the first pair
        translation = next_translation;
        translationElement.textContent = "Write here your translation of: " + verb;

        // Provide user with positive feedback 
        feedback.style.backgroundColor = "green";
        feedback.textContent = "correct, next!";

        // Hide translation and make person and verb visible 
        personVerbElement.style.display = 'block';
        translationElement.style.display = 'none';
    } 
    else {
        feedback.style.backgroundColor = "red";
        feedback.textContent = "incorrect!";
    }
}

// Access JSON data passed from the view
var jsonData = JSON.parse(jsonData);

// Take a random person from the person list to place it in html
var person = takeRandomPersonFromList();
var personVerbElement = document.getElementById("personVerb");
personVerbElement.textContent = person + " " + verb;

// Retrieve the element for feedback
feedback = document.getElementById("feedback");

// Retrieve the translation element and set to hidden and assign a text
var translationElement = document.getElementById("translation");
translationElement.style.display = 'none';
translationElement.textContent = "Write here your translation of: " + verb;
var next_translation;

// Get the text box element
var userInput = document.getElementById("userInput");
userInput.addEventListener("keypress", function(event) {
// Check if the key pressed is Enter
    if (event.key === "Enter") {
        // Get user input
        var userInputText = userInput.value;

        //
        if (personVerbElement.style.display === "none"){
            controlUserTranslation(userInputText);
        }
        else{
            controlUserVerbConjugation(userInputText);
        }
    }
})