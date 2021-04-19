import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ConditionForm, { Condition } from "../components/condition/ConditionForm";

const CodConditions = () => {
  const [conditionForm, setConditions] = React.useState<Condition[]>([]);
  React.useEffect(() => {
      axios.all([
        axios.get('/condition', { headers: { token: localStorage.getItem('token')}})
      ])
      .then(axios.spread((res)  => {
        setConditions(res.data.conditions)
      }));
  }, [])
  return(
    <>
      <Navbar />
      <div className="max-w-md mx-auto pt-12">
        <h1 className="font-bold text-blue-400 text-center text-xl mb-12">Register new condition</h1>
        <ConditionForm conditions={conditionForm} setConditions={setConditions} />
      </div>
    </>
  )
}

export default CodConditions;