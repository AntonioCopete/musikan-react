import Signup from './Signup/Signup'
import Login from './Login/Login'

import { FormStyle } from './Form.styles'

function Form() {
  return (
    <FormStyle className="form-feed">
      <div className="form">
        <Login />
        <Signup />
      </div>
    </FormStyle>
  )
}

export default Form
