import { LoginForm } from './Login.styles'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending form...')
  }

  return (
    <LoginForm onSubmit={handleSubmit} className="form__sign-in">
      <h2 className="form__title">Login</h2>
      <div className="form__input-field">
        <i className="fas fa-envelope"></i>
        <input type="text" placeholder="Email" required />
      </div>
      <div className="form__input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" required />
      </div>
      {/* <Link to="/forgot-password">Forgot password?</Link> */}

      <button className="form__submit" type="submit">
        Login
      </button>
      <p className="form__social-text">Or Login with social platforms</p>
      {/* <SocialMediaAuth /> */}
    </LoginForm>
  )
}

export default Login
