const backendURL = window.location.hostname.includes("localhost")
    ? "http://35.244.18.70:3000/api/data" // Local development
    : "http://34.47.199.70:3000/api/data";   // Inside Kubernetes

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
