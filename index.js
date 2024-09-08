
        function submitMessage() {
            const todoText = document.getElementById('message').value;
            if (todoText === '') {
                alert('Please enter a todo!');
                return;
            }
            const todoContainer = document.getElementById('todoContainer');
            const newTodo = document.createElement('h2');
            newTodo.innerHTML = todoText + ' <img src="delete.jpg" height="20px" width="20px" onclick="deleteTodo(this)">';
            todoContainer.appendChild(newTodo);
            document.getElementById('message').value = ''; 
        }

        function deleteTodo(element) {
            const todo = element.parentElement;
            todo.remove();
        }

        document.getElementById('searchInput').addEventListener('input', function() {
            const filter = this.value.toLowerCase();
            const todos = document.querySelectorAll('#todoContainer h2');
            todos.forEach(function(todo) {
                const text = todo.textContent.toLowerCase();
                if (text.includes(filter)) {
                    todo.style.display = '';
                } else {
                    todo.style.display = 'none';
                }
            });
        });
    