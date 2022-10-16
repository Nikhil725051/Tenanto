import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(){

    const [cred, setCred] = useState({
        userName: '',
        password: '',
        email: '',
        phoneNumber: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
            fetch('user/register', {
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
        .then((userData) => navigate('/welcome', {state: {userData: userData.user, err: null}}))
        .catch((err) => navigate('/welcome', {state: {userData: null, errMess: err.message}}));
    }
    return(
          <div className="auth">
              <input onChange={(e) => handleChange(e)} className="authInput" name="userName" placeholder="User name"></input>
              <input type="password" onChange={(e) => handleChange(e)} className="authInput" name="password" placeholder="Password"></input>
              <input onChange={(e) => handleChange(e)} className="authInput" name="email" placeholder="Email"></input>
              <input onChange={(e) => handleChange(e)} className="authInput" name="phoneNumber" placeholder="Contact"></input>
              <button onClick={() => handleClick()} className="authButton">Register</button>
          </div>
    );
}