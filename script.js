function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = createTaskItem(taskText);
    document.getElementById('pending-tasks').appendChild(taskItem);
    taskInput.value = '';
}

function createTaskItem(text) {
    const li = document.createElement('li');
    li.innerText = text;

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.classList.add('complete');
    completeButton.onclick = () => completeTask(li);

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTask(li);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => deleteTask(li);

    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    taskItem.querySelector('.complete').remove();
    document.getElementById('completed-tasks').appendChild(taskItem);
}

function editTask(taskItem) {
    const newText = prompt('Edit task', taskItem.firstChild.textContent);
    if (newText !== null && newText.trim() !== '') {
        taskItem.firstChild.textContent = newText;
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
