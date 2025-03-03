document.addEventListener("DOMContentLoaded", () => {
    fetchGamingNews();
    fetchUpcomingGames();
});

// Fetch Latest Gaming News
function fetchGamingNews() {
    const apiKey = "pub_7287433019515bf142d3cade407732a0c465c";
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=gaming&language=en`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById("newsContainer");
            newsContainer.innerHTML = "";
            
            data.results.slice(0, 5).forEach(news => {
                const newsCard = `
                    <div class="news-card">
                        <img src="${news.image_url || 'https://via.placeholder.com/300'}" alt="News Image">
                        <h3>${news.title}</h3>
                        <p>${news.description || 'No description available'}</p>
                        <a href="${news.link}" target="_blank">Read More</a>
                    </div>
                `;
                newsContainer.innerHTML += newsCard;
            });
        })
        .catch(error => console.error("Error fetching news:", error));
}

// Fetch Upcoming Game Releases (IGDB Alternative)
function fetchUpcomingGames() {
    const games = [
        { title: "Elden Ring: Shadow of the Erdtree", image: "https://example.com/eldenring.jpg" },
        { title: "GTA VI", image: "https://example.com/gtavi.jpg" },
        { title: "Starfield DLC", image: "https://example.com/starfield.jpg" }
    ];

    const slider = document.getElementById("gameSlider");
    slider.innerHTML = "";

    games.forEach(game => {
        const gameCard = `
            <img src="${game.image}" alt="${game.title}" title="${game.title}">
        `;
        slider.innerHTML += gameCard;
    });
}

// Search Functionality
document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    alert("Search for: " + query); // Implement real search if needed
});
