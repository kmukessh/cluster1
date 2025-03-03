document.addEventListener("DOMContentLoaded", () => {
    fetchGamingNews();
    fetchMobileNews();
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
                        <a href="${news.link}" target="_blank">Read More</a>
                    </div>
                `;
                newsContainer.innerHTML += newsCard;
            });
        })
        .catch(error => console.error("Error fetching news:", error));
}

// Fetch Mobile Gaming News
function fetchMobileNews() {
    const apiKey = "pub_7287433019515bf142d3cade407732a0c465c";
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=mobile%20gaming&language=en`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const mobileNewsContainer = document.getElementById("mobileNewsContainer");
            mobileNewsContainer.innerHTML = "";
            
            data.results.slice(0, 5).forEach(news => {
                const newsCard = `
                    <div class="news-card">
                        <img src="${news.image_url || 'https://via.placeholder.com/300'}" alt="News Image">
                        <h3>${news.title}</h3>
                        <a href="${news.link}" target="_blank">Read More</a>
                    </div>
                `;
                mobileNewsContainer.innerHTML += newsCard;
            });
        })
        .catch(error => console.error("Error fetching news:", error));
}

// Fetch Upcoming Games
function fetchUpcomingGames() {
    const games = [
        { title: "Elden Ring: Shadow of the Erdtree", image: "https://upload.wikimedia.org/eldenring.jpg" },
        { title: "GTA VI", image: "https://upload.wikimedia.org/gtavi.jpg" },
        { title: "Starfield DLC", image: "https://upload.wikimedia.org/starfield.jpg" }
    ];

    const slider = document.getElementById("gameSlider");
    slider.innerHTML = "";

    games.forEach(game => {
        slider.innerHTML += `<img src="${game.image}" alt="${game.title}" title="${game.title}">`;
    });
}
