import React from "react";
import Navbar from "../components/Navbar";
import TodoForm from "../components/todo/TodoForm";
import axios from "axios";
import TodoList, { Todo } from "../components/todo/TodoList";

const Dashboard = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  React.useEffect(() => {
      axios.all([
        axios.get('/todos', { headers: { token: localStorage.getItem('token')}})
      ])
      .then(axios.spread((res)  => {
        setTodoList(res.data.todos)
      }));
  }, [])
  return(
    <>
      <Navbar />
      <div className="max-w-md mx-auto pt-12">
        <h1 className="font-bold text-blue-400 text-center text-xl mb-12">Create case</h1>
        <TodoForm todos={todoList} setTodos={setTodoList}/>
        <h1 className="font-bold text-blue-400 text-center text-xl mb-12">Review cases</h1>
        <TodoList todos={todoList} setTodos={setTodoList} />
      </div>
    </>
  )
}

export default Dashboard;