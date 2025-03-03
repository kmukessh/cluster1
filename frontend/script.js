document.addEventListener("DOMContentLoaded", () => {
    fetchGamingNews();
    fetchUpcomingGames();
    fetchFreeGames();
});

const NEWS_API_KEY = "pub_7287433019515bf142d3cade407732a0c465c";
const FREE_GAMES_API = "https://www.freetogame.com/api/games?sort-by=release-date";

async function fetchGamingNews() {
    const url = `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=gaming&country=us`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const newsContainer = document.getElementById("news-container");

        newsContainer.innerHTML = ""; // Clear existing content

        data.results.slice(0, 6).forEach(article => {
            const card = `
                <div class="card">
                    <img src="${article.image_url || 'https://via.placeholder.com/300'}" alt="News Image">
                    <div class="card-content">
                        <h3>${article.title}</h3>
                        <p>${article.description || "No description available."}</p>
                        <a href="${article.link}" target="_blank">Read More</a>
                    </div>
                </div>
            `;
            newsContainer.innerHTML += card;
        });
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

async function fetchUpcomingGames() {
    try {
        const response = await fetch(FREE_GAMES_API);
        const data = await response.json();
        const gamesContainer = document.getElementById("upcoming-games");

        gamesContainer.innerHTML = ""; // Clear existing content

        data.slice(0, 6).forEach(game => {
            const card = `
                <div class="card">
                    <img src="${game.thumbnail}" alt="Game Image">
                    <div class="card-content">
                        <h3>${game.title}</h3>
                        <p>Genre: ${game.genre}</p>
                        <a href="${game.game_url}" target="_blank">View Game</a>
                    </div>
                </div>
            `;
            gamesContainer.innerHTML += card;
        });
    } catch (error) {
        console.error("Error fetching upcoming games:", error);
    }
}

async function fetchFreeGames() {
    try {
        const response = await fetch(FREE_GAMES_API);
        const data = await response.json();
        const freeGamesContainer = document.getElementById("free-games");

        freeGamesContainer.innerHTML = ""; // Clear existing content

        data.slice(0, 6).forEach(game => {
            const card = `
                <div class="card">
                    <img src="${game.thumbnail}" alt="Game Image">
                    <div class="card-content">
                        <h3>${game.title}</h3>
                        <p>Platform: ${game.platform}</p>
                        <a href="${game.game_url}" target="_blank">Play Now</a>
                    </div>
                </div>
            `;
            freeGamesContainer.innerHTML += card;
        });
    } catch (error) {
        console.error("Error fetching free games:", error);
    }
}
