import './SocialMediaAuth.scss'

function SocialMediaAuth() {
  return (
    <div className="form__social-media">
      <button className="form__social-icons">
        <i className="fab fa-facebook-f"></i>
      </button>
      <button className="form__social-icons">
        <i className="fab fa-twitter"></i>
      </button>
      <button className="form__social-icons">
        <i className="fab fa-google"></i>
      </button>
    </div>
  )
}

export default SocialMediaAuth
