document.addEventListener("DOMContentLoaded", () => {
    fetchGamingNews();
    fetchFreeGames();
});

const fetchGamingNews = async () => {
    const apiKey = "pub_7287433019515bf142d3cade407732a0c465c"; 
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=gaming&language=en`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch gaming news");
        const data = await response.json();
        
        const newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = "";

        (data.results || []).slice(0, 5).forEach(news => {
            const article = document.createElement("div");
            article.classList.add("news-article");
            article.innerHTML = `
                <h4><a href="${news.link}" target="_blank">${news.title}</a></h4>
                <p>${news.description || "No description available."}</p>
            `;
            newsContainer.appendChild(article);
        });
    } catch (error) {
        console.error("Error fetching gaming news:", error);
    }
};

const fetchFreeGames = async () => {
    const url = "https://www.freetogame.com/api/games?sort-by=release-date";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch free games");
        const data = await response.json();
        
        const freeGamesContainer = document.getElementById("free-games");
        freeGamesContainer.innerHTML = "";

        (data || []).slice(0, 5).forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.classList.add("game-item");
            gameItem.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h4>${game.title}</h4>
                <p>${game.short_description}</p>
                <a href="${game.game_url}" target="_blank">Play Now</a>
            `;
            freeGamesContainer.appendChild(gameItem);
        });
    } catch (error) {
        console.error("Error fetching free games:", error);
    }
};
