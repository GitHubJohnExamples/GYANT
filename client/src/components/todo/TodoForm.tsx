import React from "react";
import axios from "axios";
import { Todo } from "./TodoList";

export interface Condition {
  code: string;
  conditionName: string;
}

interface TodoFormProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoForm = ({ todos, setTodos }: TodoFormProps) => {
  const [cases, setTitle] = React.useState("");
  const [condition, setCondition] = React.useState<Condition[]>([]);
  const [conditionList, setConditionList] = React.useState("");
  React.useEffect(() => {
    axios.get('/condition', { headers: { token: localStorage.getItem('token') } })
      .then(res => {
        if (res.status === 200) {
          setCondition(res.data.conditions);
        }
      });
  }, [])

  const onSubmit = () => {
    if (cases.length > 0) {
      axios.post('/todo', { case: cases, condition: conditionList }, { headers: { token: localStorage.getItem('token') } })
        .then(res => {
          if (res.status === 200) {
            let todo = res.data.todo;
            setTodos([...todos, todo]);
            setTitle("");
            setConditionList("");
          }
        });
    }
  }

  return (
    <div className="border border-gray-400 p-4 rounded-md mb-4 flex justify-between items-center">
      <div className="container px-2 mx-auto block items-center justify-between">
        <label className="block">
          <span className="text-gray-600 font-medium block mt-4">Case</span>
          <textarea className="border-solid border-gray-300 border py-5 px-4 w-full rounded text-gray-700" onChange={e => setTitle(e.target.value)} value={cases}></textarea>
        </label>
        <label className="block">
          <span className="text-gray-600 font-medium block mt-4">EHR CODE</span>
          <select className="w-full px-3 py-2 border border-blue-400 rounded-md mr-4" onChange={e => setConditionList(e.target.value)} value={conditionList}>
            {condition.map(condition =>
              <option key={condition.code}>{condition.code + " : " + condition.conditionName}</option>
            )}
          </select>
        </label>
        <input type="button" className="mt-2 py-2 px-5 bg-blue-400 text-white rounded-md cursor-pointer" value="Add" onClick={() => onSubmit()} />
      </div>
    </div>
  )
}
export default TodoForm;