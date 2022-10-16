import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(){

    const [cred, setCred] = useState({email: '', password: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
            fetch('user/login', {
            method: 'POST',
            body: JSON.stringify(cred),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then((res) => {
            if(res.ok){
                return res;
            }else{
                var error = new Error(res.statusText);
                throw error;
            }
        })
        .then((res) => res.json())
        .then((userData) => navigate('/welcome', {state: {userData: userData.user, err: ''}}))
        .catch((err) => navigate('/welcome', {state: {userData: null, errMess: err.message}}));
    }
    return(
        <div className="auth">
        <input onChange={(e) => handleChange(e)} className="authInput" name="email" placeholder="Email"></input>
        <input type="password" onChange={(e) => handleChange(e)} className="authInput" name="password" placeholder="Password"></input>
        <button onClick={() => handleClick()} className="authButton">Login</button>
      </div>
    );
}