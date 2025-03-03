document.addEventListener("DOMContentLoaded", function () {
    fetchGamingNews();
    fetchNewReleases();
});

// Fetch Latest Gaming News
function fetchGamingNews() {
    const newsContainer = document.getElementById("news-container");

    fetch("https://newsdata.io/api/1/news?apikey=YOUR_FREE_API_KEY&q=gaming")
        .then(response => response.json())
        .then(data => {
            newsContainer.innerHTML = "";
            data.results.forEach(news => {
                const newsItem = document.createElement("div");
                newsItem.classList.add("news-item");
                newsItem.innerHTML = `
                    <h3>${news.title}</h3>
                    <img src="${news.image_url || 'default-image.jpg'}" alt="Game News">
                    <p>${news.description}</p>
                    <a href="${news.link}" target="_blank">Read More</a>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error("Error fetching news:", error));
}

// Fetch New Game Releases
function fetchNewReleases() {
    const slider = document.getElementById("game-slider");

    fetch("https://api.rawg.io/api/games?key=YOUR_RAWG_API_KEY&ordering=-released")
        .then(response => response.json())
        .then(data => {
            slider.innerHTML = "";
            data.results.forEach(game => {
                const gameSlide = document.createElement("div");
                gameSlide.classList.add("slide");
                gameSlide.innerHTML = `
                    <img src="${game.background_image}" alt="Game Image">
                    <p>${game.name} (${game.released})</p>
                `;
                slider.appendChild(gameSlide);
            });
        })
        .catch(error => console.error("Error fetching game releases:", error));
}
