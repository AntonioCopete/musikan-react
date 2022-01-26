import { useState } from 'react'
import { Container } from './Auth.styles'
import Panel from './Panel/Panel'
import Form from './Form/Form'

function Auth() {
  const [signup, setSignup] = useState('false')

  const handleSignin = () => {
    setSignup(!signup)
  }
  return (
    <Container className={`${signup ? '' : 'sign-up-mode'}`}>
      <Form />
      <Panel handleSignin={handleSignin} />
    </Container>
  )
}

export default Auth
