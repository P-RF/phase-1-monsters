// Signals that the document is fully loaded and parsed
// Console.log is used to log the message to the console, confirming the script has been executed
document.addEventListener("DOMContentLoaded", () => {
    console.log("We are connected!")})

// Initiate web request to the server using FETCH
// fetch returns a promise once the request is done
// the first .then is a callback function 
// response.json() converts the response body to JSON format (array). Also returns a promise
// The second .then is another callback function
// The console.log prints the fetched data to the console (all monsters)
// .catch() catches any errors
// Show the first 50 monsters
fetch('http://localhost:3000/monsters')
.then(response => response.json())
.then(data => {
    console.log("Fetched data", data);
    displayMonsters(data.slice(0, 50));
})
.catch(error => console.error('Error fetching:', error));


// Each monster's name, age, and description
const displayMonsters = monsters => {
    const container = document.getElementById("monster-container")

    monsters.forEach(monster => {
        container.innerHTML += `
        <div class="monster">
            <h3 class="monster-name">Name: ${monster.name}</h3>
            <p>Age: ${monster.age}</p>
            <p>Description: ${monster.description}</p>
            </div>
        `;
    });
};

// Form to create new monster
// name, age, and description
// 'Create Monster Button'







// Button at bottom 
// Load next 50 monsters and show them