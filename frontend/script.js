document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("gameContainer");
    const mobileGameContainer = document.getElementById("mobileGameContainer");
    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("searchBtn");

    // Fetch upcoming PC games
    fetch("https://www.freetogame.com/api/games?platform=pc")
        .then(response => response.json())
        .then(data => {
            displayGames(data.slice(0, 5), gameContainer);
        });

    // Fetch mobile games
    fetch("https://www.freetogame.com/api/games?platform=browser")
        .then(response => response.json())
        .then(data => {
            displayGames(data.slice(0, 5), mobileGameContainer);
        });

    // Search functionality
    searchBtn.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            fetch(`https://www.freetogame.com/api/games`)
                .then(response => response.json())
                .then(data => {
                    const filteredGames = data.filter(game => game.title.toLowerCase().includes(searchTerm));
                    gameContainer.innerHTML = "";
                    displayGames(filteredGames, gameContainer);
                });
        }
    });

    function displayGames(games, container) {
        container.innerHTML = "";
        games.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("game-card");
            gameCard.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.short_description}</p>
            `;
            container.appendChild(gameCard);
        });
    }
});
