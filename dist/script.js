// Print all the data that it received to the console and then concatenate 
// all the information together into one string and display the selections on the web page.
// Includes an event listener
function myLineUp(event) {
    event.preventDefault();
    
    const form = document.getElementById('lineupForm');
    const formData = new FormData(form);
    
    const status = formData.get('status');
    console.log('Status:', status);
    
    const gameDate = formData.get('gameDate');
    console.log('Game Date:', gameDate);
    
    const players = formData.getAll('player');
    console.log('Players:', players);
    
    // One string output
    let resultString = 'Starting Lineup Summary:\n';
    resultString += 'Status: ' + status + '\n';
    resultString += 'Date: ' + gameDate + '\n';
    resultString += 'Players: ';
    
    if (players.length > 0) {
        resultString += players.join(', ');
    } else {
        resultString += 'None selected';
    }
    
    console.log('\n' + resultString);
    
    // Display
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Submitted Information:</h2><pre>' + resultString + '</pre>';
    resultDiv.style.display = 'block';
}

// Event listener for form
document.getElementById('lineupForm').addEventListener('submit', myLineUp);