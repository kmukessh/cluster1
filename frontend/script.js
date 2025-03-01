const backendURL = window.location.hostname.includes("localhost")
    ? "http://localhost:3000/api/data" // Local development
    : "http://backend:3000/api/data";   // Inside Kubernetes

async function fetchData() {
    try {
        const response = await fetch(backendURL);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        document.getElementById("message").innerText = `Backend says: ${data.message || 'No message'}`;
    } catch (error) {
        console.error("Fetch error:", error);
        document.getElementById("message").innerText = "Error fetching backend data.";
    }
}
