
function list(){
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((todos) => {
            const todoUL = document.getElementById("todolist")
            let count = 0
            for (const todo of todos.slice(0, 10)) {
                console.log(todo);
                const todoLI = document.createElement("li")
                const checkbox = document.createElement("input")
                checkbox.type = "checkbox"
                checkbox.id = todo.id
                checkbox.checked = todo.completed
                const label = document.createElement("label")
                label.setAttribute('for', checkbox.id)
                label.textContent = `${todo.title} `
                if (checkbox.checked)
                    count++
                checkbox.addEventListener('change', () => {
                    if (checkbox.checked) {
                        count++
                    } else {
                        count--
                    }
                    if (count == 5)
                        alert("success")
                })
                todoLI.appendChild(checkbox)
                todoLI.appendChild(label)

                todoUL.appendChild(todoLI)
            }
        })
        .catch((error) => console.log(error)
        )
}
