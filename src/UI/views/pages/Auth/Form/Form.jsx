import Signup from './Signup/Signup'
import Login from './Login/Login'

import { FormStyle } from './Form.styles'

function Form({ setUserName }) {
  return (
    <FormStyle className="form-feed">
      <div className="form">
        <Login />
        <Signup setUserName={setUserName} />
      </div>
    </FormStyle>
  )
}

export default Form
