import { SignupForm } from './Signup.styles'

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending form...')
  }
  return (
    <SignupForm onSubmit={handleSubmit} className="form__sign-up">
      <h2 className="form__title">Create account</h2>
      <div className="form__input-field">
        <i className="fas fa-envelope"></i>
        <input type="text" placeholder="Name" required />
      </div>
      <div className="form__input-field">
        <i className="fas fa-envelope"></i>
        <input type="text" placeholder="Surname" required />
      </div>
      <div className="form__input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" required />
      </div>
      <div className="form__input-field">
        <i className="fas fa-envelope"></i>
        <input type="text" placeholder="Username" required />
      </div>
      <div className="form__input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" required />
      </div>
      <button className="form__submit" type="submit">
        signup
      </button>

      <p className="form__social-text">Or Sign up with social platforms</p>
      {/* <SocialMediaAuth /> */}
    </SignupForm>
  )
}

export default Signup
