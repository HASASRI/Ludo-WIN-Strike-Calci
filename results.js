document.addEventListener('DOMContentLoaded', () => {
    const playerData = JSON.parse(localStorage.getItem('playerData'));
    const numPlayers = localStorage.getItem('numPlayers');
    const resultsContainer = document.getElementById('results-container');

    if (playerData && numPlayers) {
        let tableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Total Moves Taken</th>
                        <th>Tokens Sent Home</th>
                        <th>Tokens Reached Home</th>
                        <th>Winning Percentage</th>
                        <th>Bar Graph</th>
                    </tr>
                </thead>
                <tbody>
        `;

        playerData.forEach(player => {
            const { name, moves, tokensSentHome, tokensReachedHome } = player;
            const totalTokens = tokensReachedHome + tokensSentHome;
            const winPercentage = totalTokens === 0 ? 0 : (tokensReachedHome / totalTokens) * 100;

            tableHtml += `
                <tr>
                    <td>${name}</td>
                    <td>${moves}</td>
                    <td>${tokensSentHome}</td>
                    <td>${tokensReachedHome}</td>
                    <td class="highlight">${winPercentage.toFixed(2)}%</td>
                    <td><div class="bar" style="width: ${winPercentage}%;"></div></td>
                </tr>
            `;
        });

        tableHtml += '</tbody></table>';
        resultsContainer.innerHTML = tableHtml;
    } else {
        resultsContainer.innerHTML = '<p>No data available.</p>';
    }
});
