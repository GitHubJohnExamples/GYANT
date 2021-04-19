import React from "react";
import axios from "axios";

interface SignupProps {
  renderLogin: () => void;
}

const Signup = ({renderLogin}: SignupProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const onSubmit = async() => {
    try {
      await axios.post('/signup', {
        username: username,
        password: password
      }).then(res => {
        try {
          if ( res.status === 200) {
            window.location.href = '/';
          }
        } catch (err) {
          alert("Fill proper the user or password field")
        }      
      });
    } catch (error) {
      alert("Invalid user or password")
    }}

  React.useEffect(() => {
    if (password === confirmPassword) setDisabled(false);
    else setDisabled(true);
  }, [password, confirmPassword])

  return(
    <div>
      <h1 className="text-center text-blue-400 font-bold">signup</h1>
      <div className="mb-4">
        <label>username</label>
        <input onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" type="text" placeholder="username" required/>
      </div>
      <div className="mb-4">
        <label>password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" type="password" placeholder="password" required/>
      </div>
      <div className="mb-4">
        <label>confirm password</label>
        <input onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" type="password" placeholder="password" required/>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>Already a member? <span className="text-blue-400 cursor-pointer" onClick={renderLogin}>Login</span></p>
        </div>
        <button className={`rounded-lg px-6 py-3 font-bold text-white ${disabled ? "bg-gray-400" : "bg-blue-400"}`} disabled={disabled} onClick={() => onSubmit()}>Signup</button>
      </div>
    </div>
  )
}

export default Signup;