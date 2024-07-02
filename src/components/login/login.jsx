import '../login/login.css';
import login from './img/login.png';
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { addNewAuth } from '../../Slices/Slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Message, setMessage] = useState(' ');
  const { auth } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log(auth);
    e.preventDefault();
    if (username.length >= 4 && password.length) {
      if (auth.length !== 0) {
        for (let i = 0; i < auth.length; i++) {
          if (auth[i][0] === username) {
            setMessage('Такой пользователь уже зарегистрирован');
            break;
          } else {
            setMessage('Пользователь зарегистрирован');
            dispatch(addNewAuth([username, password]));
          }
        }
      } else {
        setMessage('Пользователь зарегистрирован');
        dispatch(addNewAuth([username, password]));
      }
    } else {
      setMessage('Ошибка: Логин меньше 4х символов');
    }
  };

  return (
    <>
      <form className="forms1" onSubmit={handleSubmit}>
        <div className="container login">
          <div className="login_left">
            <img src={login} alt="" />
          </div>
          <div className="login_right">
            <div className="login_right_top">
              <h2 className="login_h2">Create an account</h2>
              <span className="login_span">Enter your details below</span>
            </div>
            <div className="form-container">
              <input
                className="input_login"
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="input_login"
                type="text"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input_login"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="create-account-btn" onClick={handleSubmit}>
                Create Account
              </button>
              <button className="google-signup-btn">Sign up with Google</button>
              <div className="login_bottom_btn">
                <button className="have-account-btn">
                  Already have account?
                </button>
                <button className="login-btn">Log in</button>
              </div>
              {Message === 'Пользователь зарегистрирован' ? (
                <div className="messageTrue">{Message}</div>
              ) : Message !== 'Пользователь зарегистрирован' ? (
                <div className="messageFalse">{Message}</div>
              ) : null}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
