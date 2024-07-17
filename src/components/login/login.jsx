import '../login/login.css';
import login from './img/login.png';
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { addNewAuth, logIN } from '../../Slices/Slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Message, setMessage] = useState(' ');

  const [logstatus, setlogstatus] = useState('reg');
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
            dispatch(addNewAuth([username, email, password]));
          }
        }
      } else {
        setMessage('Пользователь зарегистрирован');
        dispatch(addNewAuth([username, email, password]));
      }
    } else {
      setMessage('Ошибка: Логин меньше 4х символов');
    }
  };
  function handleClick(event) {
    setlogstatus('log');
  }
  function logIn(e) {
    e.preventDefault();
    if (email.length >= 4 && password.length) {
      if (auth.length !== 0) {
        for (let i = 0; i < auth.length; i++) {
          console.log(auth[i][1]);
          if (auth[i][1] === email) {
            if (password === auth[i][2]) {
              setMessage('Успешный вход');
              dispatch(logIN(true));
            } else {
              setMessage('Не верный пароль');
            }
          } else {
            setMessage('Пользователя с таким email не зарегистрирован');
          }
        }
      } else {
        setMessage('Пользователя с таким email не зарегистрирован');
      }
    } else {
      setMessage('Введите корректные данные');
    }
  }
  return (
    <>
      {logstatus === 'log' ? (
        <div className="container login">
          <div className="login_left">
            <img src={login} alt="" />
          </div>
          <div className="login_right">
            <div className="login_right_top">
              <h2 className="login_h2">Log in to Exculsive</h2>
              <span className="login_span">Enter your details below</span>
            </div>
            <div className="form-container">
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
              <div className="log_bottom_btn">
                <button className="log_in-account-btn" onClick={logIn}>
                  Log In
                </button>

                <button className="forget-btn" onClick={handleClick}>
                  Forget Password?
                </button>
              </div>
              {Message === 'Успешный вход' ? (
                <div className="messageTrueLog">{Message}</div>
              ) : (
                <div className="messageFalseLog">{Message}</div>
              )}
            </div>
          </div>
        </div>
      ) : logstatus === 'reg' ? (
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
                <button className="login-btn" onClick={handleClick}>
                  Log in
                </button>
              </div>
              {Message === 'Пользователь зарегистрирован' ? (
                <div className="messageTrue">{Message}</div>
              ) : Message !== 'Пользователь зарегистрирован' ? (
                <div className="messageFalse">{Message}</div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Login;
