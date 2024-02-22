// Take a random person from the person list
function takeRandomPersonFromList() {
    var personList = ["yo", "tu", "el", "ella", "usted", "nosotros", "ellos", "ellas", "ustedes"];
    var randomIndex = Math.floor(Math.random() * personList.length);
    return personList[randomIndex];
}

// Access JSON data passed from the view
var jsonData = JSON.parse(jsonData);

