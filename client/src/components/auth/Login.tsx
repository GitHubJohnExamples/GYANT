import React from "react";
import axios from "axios";


interface LoginProps {
  renderSignup: () => void;
}
const Login = ({renderSignup}: LoginProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = async() => {
    try {
      await axios.post('/login', {
        username: username,
        password: password
      }).then(res => {
        // sucessful, save the token
        try {
          if (res.status === 200) {
            const token = res.data.token;
            localStorage.setItem('token', token);
            window.location.href = '/dashboard';
          }
        } catch (err) {
          alert("Unauthorized")
        }      
      });
    } catch (err) {
      alert("Invalid user or password")
    }
    
  }
  return(
    <div>
      <h1 className="text-center text-blue-400 font-bold">login</h1>
      <div className="mb-4">
        <label>username</label>
        <input onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" type="text" placeholder="username" />
      </div>
      <div className="mb-4">
        <label>password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" type="password" placeholder="password" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>No account? <span className="text-blue-400 cursor-pointer" onClick={renderSignup}>Signup</span></p>
        </div>
        <button className="rounded-lg px-6 py-3 font-bold bg-blue-400 text-white" onClick={() => onSubmit()}>Login</button>
      </div>
    </div>
  )
}

export default Login;