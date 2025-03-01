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
    taskInput.value = ''; // Clear input field
}

function toggleComplete(element) {
    element.parentElement.classList.toggle('completed');
}

function deleteTask(button) {
    button.parentElement.remove();
}

// Allow adding tasks with Enter key
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});