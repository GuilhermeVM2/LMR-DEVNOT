let elevator1Floor = 1;
let elevator2Floor = 1;

function requestElevator(elevatorNumber) {
    // Your logic for handling elevator requests goes here
    
    // Example: Move Elevator 1 to a random floor
    elevator1Floor = Math.floor(Math.random() * 9) + 1;

    // Update the visual representation of elevators and floors
    updateVisuals();
}

function updateVisuals() {
    // Reset visuals
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`floor${i}`).style.backgroundColor = "#ecf0f1";
    }
    document.getElementById("elevator1").style.marginTop = `${(elevator1Floor - 1) * 40}px`;
    document.getElementById(`floor${elevator1Floor}`).style.backgroundColor = "#3498db";
    document.getElementById("elevator2").style.marginTop = `${(elevator2Floor - 1) * 40}px`;
    document.getElementById(`floor${elevator2Floor}`).style.backgroundColor = "#3498db";
}
