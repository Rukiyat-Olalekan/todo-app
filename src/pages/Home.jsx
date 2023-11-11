import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";

function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  function addTodoHandler(e) {
    const todoValue = e.target.value;
    setTodo(todoValue);
  }

  function deleteTodoHandler(index) {
    let newTodos = [...todos];

    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo.trim() === "") {
      setErrorMessage("Please add a to-do.");
      return;
    } else {
      setErrorMessage("");
    }
    setTodos((prevState) => [...prevState, todo]);

    setTodo("");
  }

  return (
    <section className="todos">
      <h1>Todos</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="todo-input-container">
          <input
            type="text"
            placeholder="Add Todo..."
            name="todo"
            value={todo}
            onChange={addTodoHandler}
          />
          <button type="submit">
            <AiFillPlusCircle style={{ fontSize: "20px" }} />
          </button>
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <ul className="todos-lists">
        {todos &&
          todos.map((todo, index) => {
            return (
              <li className="todos-li" key={index}>
                <div className="todo-text">
                  <input
                    type="checkbox"
                    onChange={() => setIsChecked(!isChecked)}
                    checked={isChecked}
                  />
                  <p className={`${isChecked} ? "checked" : ""`}>{todo}</p>
                </div>
                <button onClick={() => deleteTodoHandler(index)}>
                  <MdDelete />
                </button>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default Home;
