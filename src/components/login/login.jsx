import '../login/login.css';
import login from './img/login.png';
function Login() {
  return (
    <>
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
            <input className="input_login" type="text" placeholder="Name" />
            <input
              className="input_login"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className="input_login"
              type="password"
              placeholder="Password"
            />
            <button className="create-account-btn">Create Account</button>
            <button className="google-signup-btn">Sign up with Google</button>
            <div className="login_bottom_btn">
              <button className="have-account-btn">
                Already have account?
              </button>
              <button className="login-btn">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
