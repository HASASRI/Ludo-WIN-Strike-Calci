function addPlayerInputs() {
    const numPlayers = document.getElementById('num-players-input').value;
    const playersContainer = document.getElementById('players-container');
    playersContainer.innerHTML = ''; // Clear existing inputs

    for (let i = 1; i <= numPlayers; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-container');

        playerDiv.innerHTML = `
            <h2>Player ${i}:</h2>
            <input type="text" name="player-name-${i}" placeholder="Enter player's name" id="player-name-${i}" required><br>
            <input type="number" name="moves-${i}" placeholder="Enter number of moves taken" id="moves-${i}" required><br>
            <input type="number" name="tokens-sent-home-${i}" placeholder="Enter tokens sent home" id="tokens-sent-home-${i}" required><br>
            <input type="number" name="tokens-reached-home-${i}" placeholder="Enter tokens reached home" id="tokens-reached-home-${i}" required><br>
        `;

        playersContainer.appendChild(playerDiv);
    }
}

function submitForm() {
    const numPlayers = document.getElementById('num-players-input').value;
    let playerData = [];

    for (let i = 1; i <= numPlayers; i++) {
        const name = document.getElementById(`player-name-${i}`).value;
        const moves = parseInt(document.getElementById(`moves-${i}`).value);
        const tokensSentHome = parseInt(document.getElementById(`tokens-sent-home-${i}`).value);
        const tokensReachedHome = parseInt(document.getElementById(`tokens-reached-home-${i}`).value);

        playerData.push({
            name: name,
            moves: moves,
            tokensSentHome: tokensSentHome,
            tokensReachedHome: tokensReachedHome
        });
    }

    // Pass data to results.html using URL parameters or localStorage/sessionStorage
    localStorage.setItem('playerData', JSON.stringify(playerData));
    localStorage.setItem('numPlayers', numPlayers);
    window.location.href = 'results.html'; // Redirect to results page
}
