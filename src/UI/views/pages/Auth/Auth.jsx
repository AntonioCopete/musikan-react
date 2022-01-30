import { useState } from 'react'
// import PanelAuth from '../../components/PanelAuth/PanelAuth'
import AuthContainer from './Auth.styles'
import PanelA from '../../components/PanelAuth/PanelA/PanelA'
import Form from '../../components/Form/Form'

function Auth() {
  const [signup, setSignup] = useState('false')

  const handleSignin = () => {
    setSignup(!signup)
  }

  return (
    <AuthContainer className={`container ${signup ? '' : 'sign-up-mode'}`}>
      <Form />
      <PanelA handleSignin={handleSignin} />
    </AuthContainer>
  )
}

export default Auth
