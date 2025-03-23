const inputBox = document.getElementById("input-box");
        const listContainer = document.getElementById("task-list");

        function addTask() {
            const task = inputBox.value.trim();
            if (!task) {
                alert("Please write down a task");
                return;
            }

            const li = document.createElement("li");
            li.innerHTML = `
                <label>
                    <input type="checkbox">
                    <span>${task}</span>
                </label>
                <span class="edit-btn" onclick="editTask(this)">Edit</span>
                <span class="delete-btn" onclick="deleteTask(this)">Delete</span>
            `;

            listContainer.appendChild(li);
            inputBox.value = "";
        }

        function editTask(editBtn) {
            const li = editBtn.parentElement;
            const taskSpan = li.querySelector("span");
            const update = prompt("Edit task:", taskSpan.textContent);
            if (update !== null) {
                taskSpan.textContent = update;
                li.classList.remove("completed");
            }
        }

        function deleteTask(deleteBtn) {
            if (confirm("Are you sure you want to delete this task?")) {
                deleteBtn.parentElement.remove();
            }
        }