import { useState } from 'react'
import './Auth.scss'
import Panel from './Panel/Panel'
import Form from './Form/Form'

function Auth() {
  const [signup, setSignup] = useState('false')

  const handleSignin = () => {
    setSignup(!signup)
  }
  return (
    <main className={`container ${signup ? '' : 'sign-up-mode'}`}>
      <Form />
      <Panel handleSignin={handleSignin} />
    </main>
  )
}

export default Auth
