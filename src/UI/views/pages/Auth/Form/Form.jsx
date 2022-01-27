import Signup from './Signup/Signup'
import Login from './Login/Login'
import './form.scss'
import { FormWrapper } from './Form.styles'

function Form() {
  return (
    <FormWrapper>
      <div className="form">
        <Login />
        <Signup />
      </div>
    </FormWrapper>
  )
}

export default Form
