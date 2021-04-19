import React from "react";
import axios from "axios";

export interface Condition {
  code: string;
  conditionName: string;
}

interface ConditionFormProps {
  conditions: Condition[];
  setConditions: (conditions: Condition[]) => void;
}

const ConditionForm = ({ conditions, setConditions }: ConditionFormProps) => {
  const [code, setCode] = React.useState("");
  const [conditionName, setCondition] = React.useState("");
  const onSubmit = () => {
    if (code.length > 0) {
      axios.post('/condition', { code: code, conditionName: conditionName }, { headers: { token: localStorage.getItem('token') } })
        .then(res => {
          if (res.status === 200) {
            let condition = res.data.condition;
            setConditions([...conditions, condition]);
            setCode("");
            setCondition("");
          }
        });
    }
  }
  return (
    <div className="border border-gray-400 p-4 rounded-md mb-4 flex justify-between items-center">
      <div className="container px-2 mx-auto block items-center justify-between">
        <label className="block">
          <span className="text-gray-600 font-medium block mt-4">Code</span>
          <input className="w-full px-3 py-2 border border-blue-400 rounded-md mr-4" type="text" onChange={e => setCode(e.target.value)} value={code} />
        </label>
        <label className="block">
          <span className="text-gray-600 font-medium block mt-4">Description</span>
          <input className="w-full px-3 py-2 border border-blue-400 rounded-md mr-4" type="text" onChange={e => setCondition(e.target.value)} value={conditionName} />
        </label>
        <input type="button" className="mt-2 py-2 px-5 bg-blue-400 text-white rounded-md cursor-pointer" value="Add" onClick={() => onSubmit()} />
      </div>
    </div>
  )
}
export default ConditionForm;