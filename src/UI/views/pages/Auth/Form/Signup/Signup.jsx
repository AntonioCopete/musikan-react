import { SignupForm } from './Signup.styles'

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending form...')
  }
  return (
    <SignupForm onSubmit={handleSubmit} className="form__sign-up">
      <h2 className="form__title">Sign Up</h2>
      <div className="form__input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" required />
      </div>
      <div className="form__input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" required />
      </div>
      <div className="form__input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Repeat password" required />
      </div>
      <button className="form__submit" type="submit">
        Sign Up
      </button>

      <p className="form__social-text">Or Sign up with social platforms</p>
      {/* <SocialMediaAuth /> */}
    </SignupForm>
  )
}

export default Signup
