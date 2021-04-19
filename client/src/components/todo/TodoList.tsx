import React from "react";
import axios from "axios";

export interface Todo {
  _id: string;
  case: string;
  condition: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}
const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const [condition, setConditions] = React.useState("");
  const [title, setTitle] = React.useState("");
  const markCompleted = (todo: Todo) => {
    axios.put(`/todo/${todo._id}`, { case: title, condition: condition }, { headers: { token: localStorage.getItem('token') } })
      .then(res => {
        if (res.status === 200) {
          let _todos = todos;
          setTodos(_todos.filter(todo => res.data.todo._id !== todo._id));
          setTitle("");
          setConditions("");
        }
      });
  }

  return (
    <>{todos.find(todo => todo.isCompleted === false)  ? <div><span className="text-gray-600 font-medium block mt-4">Pending for review</span></div> : <div><span className="text-gray-600 font-medium block mt-4">You are done!</span></div>}
      {todos.filter(todo => !todo.isCompleted).map((todo) => (
        <div className="border border-gray-400 p-4 rounded-md mb-4 flex justify-between items-center" key={todo._id}>
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <label className="block">
            <span className="text-gray-600 font-medium block mt-4">Case</span>
            <textarea
              className="border-solid border-gray-300 border py-5 px-4 w-full rounded text-gray-700"
              name={"tittle"}
              rows={5}
              cols={13}
              defaultValue={todo.case}
              onChange={e => setTitle(e.target.value)} ></textarea>
          </label>
          <label className="block">
            <span className="text-gray-600 font-medium block mt-4">Condition</span>
            <textarea
              className="border-solid border-gray-300 border py-5 px-4 w-full rounded text-gray-700"
              name="condition"
              rows={5}
              cols={13}
              defaultValue={todo.condition}
              onChange={e => setConditions(e.target.value)} ></textarea>
          </label>
          <input type="button" className="mt-2 py-2 px-3 bg-blue-400 text-white rounded-md cursor-pointer" value="DONE" onClick={() => markCompleted(todo)} />
        </div>
        </div>
      ))}
    </>
  )
}

export default TodoList;