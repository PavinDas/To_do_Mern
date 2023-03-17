import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
} from "./utilis/Handleapi";

function App() {
  const [todo, setToDo] = useState([]);
  const [text, setText] = useState([]);
  const [isUpdating, setIsUdating] = useState(false);
  const [toDoId, setToDOId] = useState([]);

  const updateMode = (_id, text) => {
    setIsUdating(true);
    setText(text);
    setToDOId(_id);
  };

  useEffect(() => {
    getAllToDo(setToDo);

  }, [todo]);

 

  return (
    <div className="App">
      <div className="container">
        <div className="topsection">
          <h1>ToDo List</h1>
          <div className="top">
            <input
              type="text"
              placeholder="Add a todo..."
              value={text}
              onChange={(e) => setText(e.target.value)
              }
            />
            <div
              className="add"
              onClick={
                isUpdating
                  ? () =>
                      updateToDo(toDoId, text, setToDo, setText, setIsUdating)
                  : () => addToDo(text, setText, setToDo)
              }
            >
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>
        </div>

        <div className="list">
          {todo &&
            todo.map((item) => (
              <ToDo
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteMode={() => deleteToDo(item._id, setToDo)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
