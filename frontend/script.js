async function fetchData() {
    try {
const response = await fetch("https://your-backend-url.com");  // Replace with your backend external URL

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        document.getElementById("message").innerText = `Backend says: ${data.message || 'No message available'}`;

    } catch (error) {
        document.getElementById("message").innerText = "Error fetching backend data.";
        console.error("Fetch error:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchData);
// script.js
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return; // Prevent adding empty tasks

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById('taskList').appendChild(li);
    alert('Task added successfully!'); // User feedback for task addition

    taskInput.value = ''; // Clear input field
}

function toggleComplete(element) {
    element.parentElement.classList.toggle('completed');
}

function deleteTask(button) {
    button.parentElement.remove();
    alert('Task deleted successfully!'); // User feedback for task deletion

}

// Allow adding tasks with Enter key
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
