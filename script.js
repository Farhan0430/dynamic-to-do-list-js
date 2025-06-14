document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get trimmed input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item and set text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task on button click
    removeBtn.onclick = function() {
      taskList.removeChild(li);
    };

    // Append remove button to list item and list item to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add event listener for add button click
  addButton.addEventListener('click', addTask);

  // Add event listener for Enter key press on input field
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
